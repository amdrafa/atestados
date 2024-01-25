

export function RequestProfile() {
    return (
        <div className="flex flex-col my-10 items-center gap-3 ">
            <div className="rounded-xl flex p-10 px-14 justify-center items-center gap-10 border border-zinc-300 hover:bg-zinc-25 bg-zinc-50 cursor-pointer hover:border-primary-300 hover:ring-4 hover:ring-primary-25">
                <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-44 h-44 rounded-full" />
                <div className="flex flex-col items-center truncate">
                    <span className="text-xl font-semibold text-zinc-700 dark:text-zinc-100">Rafael Amaro</span>
                    <span className="truncate text-xl text-zinc-500 dark:text-zinc-400">tmrafinha4@gmail.com</span>
                    <span className="truncate text-xl text-primary-500 font-bold dark:text-zinc-400">EDV: 2034823</span>
                </div>
            </div>
        </div>
    )
}