import { ReactNode } from "react"

interface TableRowProps {
    children: ReactNode
}

export function TableRow({ children }: TableRowProps) {
    return (
        <tr className="text-zinc-600 hover:bg-slate-50 h-20 group">
            {children}
        </tr>
    )
}