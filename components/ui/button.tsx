import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] ",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-muted text-foreground hover:bg-muted-hover",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
        plain: "",
      },
      size: {
        sm: "h-8 px-4 text-xs [&_svg]:size-3",
        default: "h-9 px-4 py-0.5 text-sm [&_svg]:size-4",
        lg: "h-10 px-5 text-base [&_svg]:size-5",
        xl: "h-11 px-6 text-lg [&_svg]:size-6",
        "icon-sm": "h-8 w-8 [&_svg]:size-3",
        icon: "h-9 w-9 [&_svg]:size-4",
        "icon-lg": "h-10 w-10 [&_svg]:size-5",
        "icon-xl": "h-11 w-11 [&_svg]:size-6",
      },
      radius: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
