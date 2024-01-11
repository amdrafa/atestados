import { ReactNode } from "react"

interface PageRootsProps {
    children?: ReactNode
}

export function PageRoot({ children }: PageRootsProps) {
    return (
        <div>
            {children}
        </div>
    )
}