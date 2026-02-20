import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'error';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', ...props }, ref) => {

        // Base styles are in globals.css under .btn-primary or handled here
        const baseClass = "btn-base";
        const variantClass = `btn-${variant}`;
        const sizeClass = `btn-size-${size}`;

        const combinedClassName = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');

        return (
            <button
                className={combinedClassName}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
