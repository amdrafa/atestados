import { ReactNode } from "react"

interface TableRowProps {
    children: ReactNode
}

export function TableRow({ children }: TableRowProps) {
    return (
        <tr className="hover:bg-zinc-100">
            {children}
        </tr>
    )
}