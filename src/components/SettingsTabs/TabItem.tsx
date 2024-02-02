import * as Tabs from "@radix-ui/react-tabs"
import { motion } from 'framer-motion'

export interface TabItemProps {
    title: string;
    value: string;
    isSelected?: boolean;
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
    return (
        <Tabs.Trigger
            value={value}
            className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-primary-500 data-[state=active]:text-zinc-900 outline-none dark:text-zinc-300 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
        >
            <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
                {title}
            </span>

            {isSelected && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-500 dark:bg-violet-300"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.2, ease: 'linear' }}
                />
            )}
        </Tabs.Trigger>
    )
}