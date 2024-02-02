interface TableCellUserStatusProps {
    status: 'active' | 'inactive' | 'pending'
}

export function TableCellUserStatus({ status }: TableCellUserStatusProps) {
    return (
        <td className={`py-2 px-4 text-left border-b`}>
            <span className={`${status == 'active' ? 'bg-primary-500' : status == 'pending' ? 'bg-boschBlue-500' : 'bg-boschRed-500'} text-zinc-50 rounded-full py-1 px-4`}>{status}</span>
        </td>
    )
}