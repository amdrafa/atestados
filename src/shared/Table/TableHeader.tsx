import { ReactNode } from "react"

interface TableHeaderProps {
    children: ReactNode
}

export function TableHeader({ children }: TableHeaderProps) {
    return (
        <thead className="bg-zinc-50 text-zinc-800 border-b">
            {children}
        </thead>
    )
}