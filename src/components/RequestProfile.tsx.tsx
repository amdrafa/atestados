interface ProfileInfoProps {
    name: string;
    email: string;
    status: 'active' | 'inactive' | 'pending'
    edv: string;
    avatar?: unknown;
}

export function ProfileInfo({ name, email, status, edv }: ProfileInfoProps) {
    return (
        <div className="flex flex-col my-10 items-center gap-3 ">
            <div className={`relative rounded-xl flex p-10 px-14 justify-center items-center gap-10 border border-zinc-300 hover:bg-zinc-25 bg-zinc-50 cursor-pointer ${status == 'active' ? 'hover:border-primary-300 hover:ring-primary-25' : status == 'inactive' ? 'hover:border-boschRed-500 hover:ring-red-100' : 'hover:border-boschBlue-500 hover:ring-blue-100'}  hover:ring-4 `}>
                <span className={`${status == 'active' ? 'bg-primary-500' : status == 'inactive' ? 'bg-boschRed-500' : 'bg-boschBlue-500'} absolute top-4 right-6 text-zinc-50 rounded-full py-1 px-4`}>{status}</span>
                <img
                    src="https://github.com/amdrafa.png"
                    alt="User profile picture"
                    className="w-44 h-44 rounded-full"
                />
                <div className="flex flex-col items-center truncate">
                    <span className="text-xl font-semibold text-zinc-700 dark:text-zinc-100">
                        {name}
                    </span>
                    <span className="truncate text-xl text-zinc-500 dark:text-zinc-400">
                        {email}
                    </span>
                    <span className={`truncate text-xl  font-bold dark:text-zinc-400 ${status == 'active' ? 'text-primary-500' : status == 'inactive' ? 'text-boschRed-500' : 'text-boschBlue-500'}`}>
                        EDV: {edv}
                    </span>
                </div>
            </div>
        </div>
    );
}