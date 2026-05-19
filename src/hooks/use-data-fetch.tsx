import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QueryOptions, PaginatedResponse } from "@/lib/api";

interface UseDataFetchOptions<T> {
  queryFn: (options?: QueryOptions) => Promise<PaginatedResponse<T> | T[] | T | null>;
  queryOptions?: QueryOptions;
  enabled?: boolean;
  staleTime?: number;
}

interface UseDataFetchResult<T> {
  data: T | T[] | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  isRefetching: boolean;
}

export function useDataFetch<T>({
  queryFn,
  queryOptions,
  enabled = true,
  staleTime = 5 * 60 * 1000,
}: UseDataFetchOptions<T>): UseDataFetchResult<T> {
  const [data, setData] = useState<T | T[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRefetching, setIsRefetching] = useState(false);
  
  const lastFetchTime = useRef<number>(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async (isRefetch = false) => {
    if (!enabled) return;

    const now = Date.now();
    if (!isRefetch && data && now - lastFetchTime.current < staleTime) {
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    try {
      if (isRefetch) {
        setIsRefetching(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      const result = await queryFn(queryOptions);
      
      if (result && typeof result === 'object' && 'data' in result) {
        setData((result as PaginatedResponse<T>).data);
      } else {
        setData(result as T | T[]);
      }
      
      lastFetchTime.current = now;
    } catch (err) {
      if (signal.aborted) return;
      setError(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
      if (!signal.aborted) {
        setIsLoading(false);
        setIsRefetching(false);
      }
    }
  }, [queryFn, queryOptions, enabled, staleTime, data]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    refetch: () => fetchData(true),
    isRefetching,
  };
}

export function SmoothSkeleton({ className = "", count = 1 }: { className?: string; count?: number }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
          className="h-24 bg-slate-100 rounded-2xl"
        />
      ))}
    </div>
  );
}

export function SmoothDataTransition<T>({
  data,
  isLoading,
  error,
  children,
  loadingComponent,
  errorComponent,
}: {
  data: T | T[] | null;
  isLoading: boolean;
  error: string | null;
  children: (data: T | T[]) => React.ReactNode;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {loadingComponent || <LoadingSpinner />}
        </motion.div>
      ) : error ? (
        <motion.div
          key="error"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {errorComponent || <ErrorMessage message={error} />}
        </motion.div>
      ) : data ? (
        <motion.div
          key="data"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
        >
          {children(data)}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function StaggeredList<T>({
  items,
  renderItem,
  className = "",
}: {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm font-bold text-slate-400 uppercase tracking-widest"
      >
        Loading...
      </motion.p>
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-4 py-20 text-center"
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center"
      >
        <span className="text-2xl">⚠️</span>
      </motion.div>
      <p className="text-sm font-bold text-slate-500 max-w-sm">{message}</p>
    </motion.div>
  );
}
