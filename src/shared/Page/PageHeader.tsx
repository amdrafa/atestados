interface PageTitleProps {
    title: string
}

export function PageHeader({ title }: PageTitleProps) {

    return (
        <h1 className="to-zinc-900 text-3xl font-medium dark:text-zinc-100">
            {title}
        </h1>
    )

}