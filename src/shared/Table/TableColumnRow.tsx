import { ReactNode } from "react"

interface TableColumnRowProps {
    children: ReactNode
}

export function TableColumnRow({ children }: TableColumnRowProps) {
    return (
        <tr>
            {children}
        </tr>
    )
}