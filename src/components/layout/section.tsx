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
    <section id={id} className={cn("py-[40px] md:py-[48px] lg:py-[64px] xl:py-[80px] 2xl:py-[96px]", className)}>
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <div className={cn("mb-[24px] md:mb-[32px] lg:mb-[48px]", centered && "text-center max-w-[600px] mx-auto")}>
            {subtitle && (
              <span className="text-[#0A7075] font-semibold tracking-[0.2em] uppercase text-[11px] md:text-[11px] lg:text-[11px] mb-3 block text-center">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#0D2137] tracking-tight leading-tight md:leading-[1.3] lg:leading-[1.2] text-center">
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
