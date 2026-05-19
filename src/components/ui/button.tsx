import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-[14px] font-semibold transition-all duration-[0.2s] ease focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(10,112,117,0.2)] disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-[#0A7075] text-white hover:bg-[#065F63]",
        destructive: "bg-[#EF4444] text-white hover:bg-[#EF4444]/90",
        outline: "border-[1.5px] border-[#0A7075] bg-transparent text-[#0A7075] hover:bg-[#E6F4F4]",
        secondary: "bg-[#0D2137] text-white hover:bg-[#0D2137]/80",
        ghost: "bg-transparent text-[#0A7075] hover:underline border-none",
        link: "text-[#0A7075] underline-offset-4 hover:underline",
      },
      size: {
        default: "py-[12px] px-[24px]",
        sm: "py-[8px] px-[16px] text-[12px]",
        lg: "py-[16px] px-[32px] text-[16px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
