import { ComponentProps } from "react"

interface TableColumnHeaderCellProps extends ComponentProps<'th'> {
}

export function TableColumnHeaderCell(props: TableColumnHeaderCellProps) {
    return (
        <th className="py-2 px-4 text-left border-b text-zinc-500 font-normal text-xs" {...props} />
    )
}