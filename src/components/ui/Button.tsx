import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                {
                    "bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] text-white hover:opacity-90 shadow-lg shadow-purple-500/30":
                        variant === "primary",
                    "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md":
                        variant === "secondary",
                    "border border-white/20 text-white hover:bg-white/10":
                        variant === "outline",
                    "text-white hover:bg-white/10": variant === "ghost",
                    "h-8 px-3 text-sm": size === "sm",
                    "h-10 px-4 text-base": size === "md",
                    "h-12 px-6 text-lg": size === "lg",
                },
                className
            )}
            {...props}
        />
    );
}
