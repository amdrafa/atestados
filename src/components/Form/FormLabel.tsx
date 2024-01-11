import { ComponentProps } from "react"

export type FormLabelProps = ComponentProps<'label'>

export function FormLabel(props: FormLabelProps) {
    return (
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" {...props} />
    )
}