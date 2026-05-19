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
    <section id={id} className={cn("py-[80px] md:py-[48px] lg:py-[80px]", className)}>
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <div className={cn("mb-[24px]", centered && "text-center max-w-[600px] mx-auto")}>
            {subtitle && (
              <span className="text-[#0A7075] font-semibold tracking-wider uppercase text-[11px] mb-3 block text-center">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-[36px] md:text-[28px] font-bold text-[#0D2137] tracking-tight leading-tight text-center">
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
