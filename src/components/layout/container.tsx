import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-full px-[16px] md:px-[20px] lg:px-[32px] xl:px-[40px] 2xl:max-w-[1280px] 2xl:px-[24px] 3xl:max-w-[1400px] 3xl:px-[40px]",
        className
      )}
    >
      {children}
    </div>
  );
}
