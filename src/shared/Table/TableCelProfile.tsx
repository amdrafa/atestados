import { ComponentProps } from "react"

interface TableCellProfileProps extends ComponentProps<'td'> {
    name: string;
    email: string;
    avatar?: unknown;
}

export function TableCellProfile(props: TableCellProfileProps) {
    return <td className="py-2 px-4 text-left border-b flex gap-3 items-center h-20 " {...props}>
        <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
            <span className="font-bold text-zinc-700 group-hover:text-primary-500">{props.name}</span>
            <span>{props.email}</span>
        </div>
    </td>
}

