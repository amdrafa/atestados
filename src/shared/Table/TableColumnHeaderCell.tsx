import { ReactNode } from "react"

interface TableColumnHeaderCellProps {
    children: ReactNode
}

export function TableColumnHeaderCell({ children }: TableColumnHeaderCellProps) {
    return (
        <th className="py-2 px-4 text-left border-b text-zinc-600 font-semibold">
            {children}
        </th>
    )
}