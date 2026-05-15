import { cn } from "@/lib/utils";
import { Container } from "./container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, breadcrumb, className }: PageHeaderProps) {
  return (
    <section className={cn("relative bg-white pt-32 pb-24 overflow-hidden", className)}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <Container className="relative z-10 text-center">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          {breadcrumb && (
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] mb-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              <span className="text-slate-400">Home</span>
              <span className="text-slate-200">/</span>
              <span className="text-primary">{breadcrumb}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          <div className="h-1.5 w-24 bg-primary rounded-full mt-4"></div>
        </div>
      </Container>
    </section>
  );
}
