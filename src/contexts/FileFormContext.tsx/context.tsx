import { createContext, useId, useContext, useState, ReactNode } from "react"

export type FileFormContextProviderProps = {
    children: ReactNode;
}

type FileFormContextType = {
    id: string;
    files: File[];
    onFilesSelected: (files: File[], multiple: boolean) => void;
}

const FileFormContext = createContext({} as FileFormContextType)

export function FileFormContextProvider({ children }: FileFormContextProviderProps) {

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
        <FileFormContext.Provider value={{ id, files, onFilesSelected }}>
            {children}
        </FileFormContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFileForm = () => useContext(FileFormContext)