import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {

    const { id, onFilesSelected } = useFileInput()

    function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files?.length) {
            return;
        }

        const files = Array.from(event.target.files)

        onFilesSelected(files, multiple)

        console.log(files + 'aq')
    }

    return (
        <input multiple={multiple} type="file" className="sr-only" id={id} onChange={handleFilesSelected} {...props} />
    )
}