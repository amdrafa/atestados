import { ComponentProps, ReactNode } from "react"

interface PageTitleProps extends ComponentProps<'div'> {
    title: string
    button?: ReactNode;
}

export function PageHeader(props: PageTitleProps) {

    return (
        <div className="flex justify-between items-center">
            <h1 className="to-zinc-900 text-3xl font-medium dark:text-zinc-100" {...props}>
                {props.title}
            </h1>
            {props.button && props.button}
        </div>
    )

}