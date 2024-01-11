import { ComponentProps } from "react"

interface FormRootProps extends ComponentProps<'form'> {
}

export function FormRoot(props: FormRootProps) {
    return (
        <form className="flex flex-col w-full mt-2 gap-5 divide-y divide-zinc-200 dark:divide-zinc-700" {...props} />
    )
}