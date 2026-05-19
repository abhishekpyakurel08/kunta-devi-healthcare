"use client";

import { motion } from "framer-motion";
import { Loader2, RefreshCw, AlertCircle } from "lucide-react";

export function LoadingSpinner({ text = "Loading..." }: { text?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center gap-4 py-20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm font-bold text-slate-400 uppercase tracking-widest"
      >
        {text}
      </motion.p>
    </motion.div>
  );
}

export function ErrorMessage({ 
  message = "Something went wrong.", 
  onRetry 
}: { 
  message?: string; 
  onRetry?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center gap-6 py-20 text-center"
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center"
      >
        <AlertCircle className="h-8 w-8 text-red-500" />
      </motion.div>
      <div className="space-y-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-bold text-slate-500 max-w-sm"
        >
          {message}
        </motion.p>
      </div>
      {onRetry && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </motion.button>
      )}
    </motion.div>
  );
}

export function SmoothSkeleton({ 
  className = "", 
  count = 1,
  height = "h-24" 
}: { 
  className?: string; 
  count?: number;
  height?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
          className={`${height} bg-slate-100 rounded-2xl`}
        />
      ))}
    </div>
  );
}
