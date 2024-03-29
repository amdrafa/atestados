import { Check, Clock, Hourglass, Plus, X } from "lucide-react";
import { RequestStatusEnum } from "../../enums/RequestStatusEnum";

interface RequestCardItemProps {
    name: string;
    edv: string;
    date?: string;
    type: string;
}

export function RequestCardItem({ edv, name, type }: RequestCardItemProps) {
    return (

        <div className={`flex justify-between items-center bg-zinc-100 rounded-md border-l-6 ${type == RequestStatusEnum.ONGOING && 'border-l-primary-500'} ${type == RequestStatusEnum.SUCCESS && 'border-l-boschGreen-500'} ${type == RequestStatusEnum.REJECTED && 'border-l-boschRed-500'} ${type == RequestStatusEnum.PENDING && 'border-l-boschBlue-500'}  p-4 hover:bg-zinc-200 hover:cursor-pointer`}>
            <div className="flex items-center gap-2">
                <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                    <div className="font-medium text-zinc-800">{name} - {edv}</div>
                    <div className="flex items-center font-thin space-x-1 text-zinc-500">
                        <Clock size={14} />
                        <span>20/01/2023 às 15:23</span>
                    </div>
                </div>
            </div>
            <div className="rounded-full bg-white p-2">
                {type === RequestStatusEnum.PENDING && (
                    <Plus className="text-blue-500" size={18} />
                )}

                {type === RequestStatusEnum.SUCCESS && (
                    <Check className="text-green-600" size={18} />
                )}

                {type === RequestStatusEnum.REJECTED && (
                    <X className="text-red-600" size={18} />
                )}
                {type === RequestStatusEnum.ONGOING && (
                    <Hourglass className="text-primary-500" size={18} />
                )}
            </div>
        </div>

    )
}