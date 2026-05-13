import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, breadcrumb, className }: PageHeaderProps) {
  return (
    <div className={cn("relative bg-dark py-20 lg:py-32 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-primary/10 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="container-custom text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          {breadcrumb && (
            <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
              <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-primary">{breadcrumb}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
