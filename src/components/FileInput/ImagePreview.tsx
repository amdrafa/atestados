import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {

    const { files } = useFileInput()

    const previewUrl = useMemo(() => {
        if (files.length === 0) {
            return null
        }

        return URL.createObjectURL(files[0])
    }, [files])


    if (previewUrl === null) {
        return (
            <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full dark:bg-violet-500/10">
                <User className="w-8 h-8 text-violet-500 dark:text-violet-300" />
            </div>
        )
    } else {
        return (
            <img src={previewUrl} alt="Preview file" className="h-16 w-16 rounded-full object-cover" />
        )
    }

}