import { ReactNode } from "react"

interface TableCellProps {
    children: ReactNode
}

export function TableCell({ children }: TableCellProps) {
    return (
        <td className="py-2 px-4 text-left border-b">
            {children}
        </td>
    )
}