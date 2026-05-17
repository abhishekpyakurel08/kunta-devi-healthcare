import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("skeleton rounded-xl", className)}
      role="status"
      aria-label="Loading..."
    />
  );
}

export function CardSkeleton() {
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden"
      role="status"
      aria-busy="true"
    >
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="space-y-2 pt-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-4/5" />
          ))}
        </div>
        <Skeleton className="h-11 w-full mt-4" />
      </div>
    </div>
  );
}

export function DoctorCardSkeleton() {
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden"
      role="status"
      aria-busy="true"
    >
      <Skeleton className="aspect-square w-full rounded-none" />
      <div className="p-5 space-y-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
}

export function FAQSkeleton() {
  return (
    <div className="space-y-4" role="status" aria-busy="true">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
          <Skeleton className="h-16 rounded-none" />
        </div>
      ))}
    </div>
  );
}

export function StatSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 space-y-3">
      <Skeleton className="h-12 w-12 rounded-2xl" />
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")}
        />
      ))}
    </div>
  );
}
