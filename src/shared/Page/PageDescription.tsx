import { ReactNode } from "react";

interface PageDescriptionProps {
    children?: ReactNode
}

export function PageDescription({ children }: PageDescriptionProps) {
    return (
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
            {children}
        </div>
    )
}