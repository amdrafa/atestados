import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SelectProps {
    children: ReactNode;
    placeholder: string;
}

export function Select({ children, placeholder }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SelectPrimitive.Root open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
            >
                <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
                    <SelectPrimitive.Value
                        placeholder={placeholder}
                        className="text-black"
                    />
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="h-5 w-5 text-zinc-500" />
                    </motion.div>
                </SelectPrimitive.Trigger>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <SelectPrimitive.Portal>
                                <SelectPrimitive.Content
                                    side="bottom"
                                    position="popper"
                                    sideOffset={8}
                                    className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
                                    </motion.div>
                                </SelectPrimitive.Content>
                            </SelectPrimitive.Portal>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </SelectPrimitive.Root>
    );
}
