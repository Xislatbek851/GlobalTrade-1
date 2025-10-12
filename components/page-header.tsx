import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    subtitle?: string
    description?: string
    children?: ReactNode
    className?: string
    variant?: "default" | "centered" | "minimal"
}

export function PageHeader({
    title,
    subtitle,
    description,
    children,
    className,
    variant = "default"
}: PageHeaderProps) {
    const baseClasses = "relative py-12 sm:py-16 bg-gradient-to-b from-background to-muted/20"

    if (variant === "minimal") {
        return (
            <section className={cn("py-8 bg-background", className)}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="mt-3 text-lg text-muted-foreground text-pretty">
                                {subtitle}
                            </p>
                        )}
                        {children}
                    </div>
                </div>
            </section>
        )
    }

    if (variant === "centered") {
        return (
            <section className={cn(baseClasses, className)}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="mt-4 text-base sm:text-lg leading-7 text-muted-foreground text-pretty">
                                {subtitle}
                            </p>
                        )}
                        {description && (
                            <p className="mt-3 text-sm sm:text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                        {children}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className={cn(baseClasses, className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-4 text-base sm:text-lg leading-7 text-muted-foreground text-pretty">
                            {subtitle}
                        </p>
                    )}
                    {description && (
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground text-pretty max-w-2xl">
                            {description}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </section>
    )
}
