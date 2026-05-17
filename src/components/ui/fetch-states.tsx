import { Loader2 } from "lucide-react";

export function LoadingSpinner({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <Loader2 className="h-10 w-10 text-primary animate-spin" />
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{text}</p>
    </div>
  );
}

export function ErrorMessage({ message = "Something went wrong." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center">
        <span className="text-2xl">⚠️</span>
      </div>
      <p className="text-sm font-bold text-slate-500 max-w-sm">{message}</p>
    </div>
  );
}
