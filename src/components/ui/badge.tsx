import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[100px] border px-[12px] py-[4px] text-[12px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(10,112,117,0.2)]",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#E6F4F4] text-[#0A7075] hover:bg-[#E6F4F4]/80",
        secondary: "border-transparent bg-[#0D2137] text-white hover:bg-[#0D2137]/80",
        destructive: "border-transparent bg-[#EF4444] text-white hover:bg-[#EF4444]/80",
        outline: "border-[#E0EDED] text-[#555F6D]",
        success: "border-transparent bg-[#DCFCE7] text-[#16A34A] hover:bg-[#DCFCE7]/80",
        available: "border-transparent bg-[#DCFCE7] text-[#16A34A]",
        off: "border-transparent bg-[#F1F5F9] text-[#8A9BAC]",
        popular: "border-transparent bg-[#FEF3C7] text-[#D97706]",
        "top-rated": "border-transparent bg-[#DBEAFE] text-[#2563EB]",
        expertise: "bg-transparent border-[#E0EDED] text-[#0A7075] px-[14px] py-[6px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
