import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export function Section({
  children,
  className,
  id,
  containerClassName,
  title,
  subtitle,
  centered = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <div className={cn("mb-12 md:mb-16", centered && "text-center max-w-3xl mx-auto")}>
            {subtitle && (
              <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
