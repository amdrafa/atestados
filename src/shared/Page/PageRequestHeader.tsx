import { ComponentProps } from "react";


export interface PageRequestHeaderProps extends ComponentProps<'div'> { }

export function PageRequestHeader(props: PageRequestHeaderProps) {
    return (
        <h1 className="text-zinc-600 text-xl font-medium dark:text-zinc-100 flex justify-between items-center gap-2" {...props} />
    )
}