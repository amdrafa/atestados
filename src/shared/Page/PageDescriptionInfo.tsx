interface PageDescriptionInfoProps {
    title: string;
    description: string;
}

export function PageDescriptionInfo({ description, title }: PageDescriptionInfoProps) {
    return (
        <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {title}
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {description}
            </span>
        </div>
    )
}