interface TableCellRequestStatusProps {
    status: 'pending' | 'progress' | 'approved' | 'rejected'
}

export function TableCellRequestStatus({ status }: TableCellRequestStatusProps) {
    return (
        <td className={`py-2 px-4 text-left border-b`}>
            <span className={`${status == 'pending' ? 'bg-boschBlue-500' : status == 'progress' ? 'bg-primary-500' : status == 'approved' ? 'bg-boschGreen-500' : 'bg-boschRed-500'} text-zinc-50 rounded-full py-1 px-4`}>{status}</span>
        </td>
    )
}