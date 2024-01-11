import { useFileInput } from "./Root";
import { FileItem } from "./FileItem";

export function FileList() {
    const { files } = useFileInput();

    return (
        <div className="mt-4 space-y-3">
            {files.map((file) => (
                <FileItem
                    name={file.name}
                    size={file.size}
                    key={file.name}
                />
            ))}
        </div>
    );
}
