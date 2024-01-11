import { ReactNode } from "react";

interface PageContentProps {
    children?: ReactNode
}

export function PageContent({ children }: PageContentProps) {
    return (
        <div className="mt-6 flex flex-col">
            {children}
        </div>
    )
}