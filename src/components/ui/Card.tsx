import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-rose-200/20 hover:bg-white/[0.07] hover:shadow-rose-900/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
