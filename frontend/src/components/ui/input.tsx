import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, ...props }, ref) => {
        const combinedClassName = [
            "input-field",
            error ? "error" : "",
            className
        ].filter(Boolean).join(' ');

        return (
            <input
                type={type}
                className={combinedClassName}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
