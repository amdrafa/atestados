import { motion } from "framer-motion"
import { UploadCloud, Trash2, CheckCircle2 } from "lucide-react"
import { formatBytes } from "../utils/format-bytes"

export type FileItemProps = {
    name: string;
    size: number;
}

export function FileItem({ name, size }: FileItemProps) {

    const state = 'complete'

    return (
        <motion.div
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        >
            <div className="rounded-full border-4 border-primary-25 p-2 text-primary-600">
                <UploadCloud className="w-4 h-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-700">{name.length > 30 ? name.slice(0, 28) + '...' : name}</span>
                    <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
                </div>

                <div className="flex w-full items-center gap-3">
                    <div className="h-2 flex-1 rounded-full bg-zinc-100">
                        <motion.div
                            className="h-2 w-4/5 rounded-full bg-primary-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                        />
                    </div>
                </div>
            </div>

            {state !== 'complete' ? (
                <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
            ) : (
                <motion.button
                    type="button"
                    className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Trash2 className="h-5 w-5 text-zinc-500" />
                </motion.button>
            )
            }
        </motion.div >
    )
}