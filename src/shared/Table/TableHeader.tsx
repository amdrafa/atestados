import { ReactNode } from "react"

interface TableHeaderProps {
    children: ReactNode
}

export function TableHeader({ children }: TableHeaderProps) {
    return (
        <thead className="bg-zinc-50 border-b">
            {children}
        </thead>
    )
}