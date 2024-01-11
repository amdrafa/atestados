import { ReactNode } from "react"

interface RequestCardRootProps {
    children: ReactNode;
}

export function RequestCardRoot({ children }: RequestCardRootProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4 px-2 gap-x-6 gap-y-4">
            {children}
        </div>
    )
}