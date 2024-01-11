import { ReactNode } from "react"

interface TableRootProps {
    children: ReactNode
}

export function TableRoot({ children }: TableRootProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                {children}
            </table>
        </div>
    )
}