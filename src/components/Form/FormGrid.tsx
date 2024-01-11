import { ComponentProps } from "react"

export type FormGridProps = ComponentProps<'div'>

export function FormGrid(props: FormGridProps) {
    return (
        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form" {...props} />
    )
}