import { ReactNode } from "react"

interface PageActionProps {
    children?: ReactNode
}

export function PageActions({ children }: PageActionProps) {
    return (
        <div className="flex justify-end gap-2 pt-5">
            {children}
        </div>
    )
}