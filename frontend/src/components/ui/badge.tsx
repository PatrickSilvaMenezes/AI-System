import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'neutral' | 'success' | 'error';
}

function Badge({ className, variant = 'neutral', ...props }: BadgeProps) {
    const combinedClassName = [
        "badge",
        `badge-${variant}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={combinedClassName} {...props} />
    )
}

export { Badge }
