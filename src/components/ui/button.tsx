import * as React from "react";
import { cn } from "../../lib/utils";

// Minimal Button implementation to avoid hard dependency on external libs.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? ((props as { as?: React.ElementType }).as || "button") : "button";

    // Basic class composition: allow passing className and simple variant/size keys
    const variantClass =
      variant === "ghost"
        ? "hover:bg-accent hover:text-accent-foreground"
        : variant === "outline"
        ? "border border-input bg-background"
        : variant === "link"
        ? "text-primary underline-offset-4 hover:underline"
        : "bg-primary text-primary-foreground";

    const sizeClass =
      size === "sm"
        ? "h-8 rounded-md px-3 text-xs"
        : size === "lg"
        ? "h-10 rounded-md px-8"
        : "h-9 px-4 py-2";

    return (
      <Comp
        ref={ref}
        className={cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", variantClass, sizeClass, className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button };
