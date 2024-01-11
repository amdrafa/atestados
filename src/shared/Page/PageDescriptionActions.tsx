import { ReactNode } from "react"

interface PageDescriptionActionsProps {
    children: ReactNode
}

export function PageDescriptionActions({ children }: PageDescriptionActionsProps) {
    return (
        <div className="flex items-center gap-2 ">
            {children}
        </div>
    )
}