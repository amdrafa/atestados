import { ComponentProps, createContext, useId, useContext, useState, ReactNode } from "react"

export type RootProps = ComponentProps<'div'> & {
    children: ReactNode;
}

type FileInputContextType = {
    id: string;
    files: File[];
    onFilesSelected: (files: File[], multiple: boolean) => void;
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {

    const id = useId()
    const [files, setFiles] = useState<File[]>([])

    function onFilesSelected(files: File[], multiple: boolean) {
        if (multiple) {
            setFiles((state) => [...state, ...files])
        } else {
            setFiles(files)
        }
        console.log(files)
    }

    return (
        <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
            <div {...props} />
        </FileInputContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFileInput = () => useContext(FileInputContext)