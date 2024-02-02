import { ComponentProps } from "react"

interface TableCellProps extends ComponentProps<'td'> { }

export function TableCell(props: TableCellProps) {
    return <td className="py-2 px-4 text-left border-b" {...props} />
}

