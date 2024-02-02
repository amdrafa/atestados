import { AlertTriangleIcon } from "lucide-react";

export function RequestUploadAdvice() {
    return (
        <div className='flex flex-col gap-4 bg-zinc-100 p-6 my-4'>
            <div className='flex gap-2 text-boschRed-500'><AlertTriangleIcon className='w-5 h-5' /> <span>ATTENTION</span></div>

            <div className='text-zinc-500'>
                Choose the method for submitting your medical certificate. The image will be processed, and the identified fields will be automatically filled in.
            </div>

            <div className='text-zinc-700'>
                Dear user, <span className='text-boschRed-500 font-semibold'>please keep the certificate</span> until the approval process is completed.
            </div>
        </div>
    )
}