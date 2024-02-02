import { ChangeEvent, ComponentProps } from "react"
import { useFileForm } from "../../contexts/FileFormContext.tsx/context";

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {

    const { id, onFilesSelected } = useFileForm()

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