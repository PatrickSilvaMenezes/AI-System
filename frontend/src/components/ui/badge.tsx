import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-brand-primary text-white hover:bg-brand-primary/80",
                secondary:
                    "border-transparent bg-surface-bg text-text-main hover:bg-surface-bg/80",
                destructive:
                    "border-transparent bg-feedback-error text-white hover:bg-feedback-error/80",
                outline: "text-foreground",
                success: "border-transparent bg-feedback-success text-white hover:bg-feedback-success/80",
                neutral: "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200",
                info: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
