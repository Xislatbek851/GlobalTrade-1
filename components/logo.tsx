import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    size?: "sm" | "md" | "lg"
    showText?: boolean
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
    const sizeClasses = {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12"
    }

    const textSizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl"
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            {/* Logo Icon */}
            <div className={cn("relative", sizeClasses[size])}>
                <Image
                    src="/logo-icon.png"
                    alt="GLOBARA Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    priority
                />
            </div>

            {/* Logo Text */}
            {showText && (
                <span className={cn("font-bold text-foreground", textSizeClasses[size])}>
                    GLOBARA
                </span>
            )}
        </div>
    )
}

// Alternative logo with different design
export function LogoAlt({ className, size = "md", showText = true }: LogoProps) {
    const sizeClasses = {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12"
    }

    const textSizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl"
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            {/* Logo Icon */}
            <div className={cn("relative", sizeClasses[size])}>
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="currentColor"
                        className="text-primary"
                        opacity="0.1"
                    />

                    {/* Globe */}
                    <circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-primary"
                        fill="none"
                    />

                    {/* Globe Grid Lines */}
                    <path
                        d="M50 15 C65 25, 75 40, 75 50 C75 60, 65 75, 50 85 C35 75, 25 60, 25 50 C25 40, 35 25, 50 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary"
                        fill="none"
                    />

                    <path
                        d="M25 50 C35 50, 65 50, 75 50"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary"
                        fill="none"
                    />

                    <path
                        d="M50 15 C50 30, 50 70, 50 85"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary"
                        fill="none"
                    />

                    {/* Trade Symbols */}
                    <path
                        d="M20 30 L30 40 L25 45 L35 55 L30 60 L20 50 L25 45 L15 35 Z"
                        fill="currentColor"
                        className="text-primary"
                        opacity="0.7"
                    />

                    <path
                        d="M80 30 L70 40 L75 45 L65 55 L70 60 L80 50 L75 45 L85 35 Z"
                        fill="currentColor"
                        className="text-primary"
                        opacity="0.7"
                    />

                    {/* Center Star */}
                    <path
                        d="M50 40 L52 46 L58 46 L53 50 L55 56 L50 52 L45 56 L47 50 L42 46 L48 46 Z"
                        fill="currentColor"
                        className="text-primary"
                        opacity="0.8"
                    />
                </svg>
            </div>

            {/* Logo Text */}
            {showText && (
                <span className={cn("font-bold text-foreground", textSizeClasses[size])}>
                    GLOBARA
                </span>
            )}
        </div>
    )
}

// Simple text-based logo
export function LogoText({ className, size = "md" }: LogoProps) {
    const textSizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-3xl"
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <span className={cn("font-bold text-primary", textSizeClasses[size])}>
                G
            </span>
            <span className={cn("font-bold text-foreground", textSizeClasses[size])}>
                LOBARA
            </span>
        </div>
    )
}
