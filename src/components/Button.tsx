import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants"

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>
const button = tv({
    base: [
        'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
        'active:opacity-80'
    ],
    variants: {
        variant: {
            primary: 'bg-primary-500 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
            red: 'bg-boschRed-500 text-white hover:bg-red-700',
            yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
            blue: 'bg-boschBlue-500 text-white hover:bg-boschBlue-600',
            green: 'bg-boschGreen-500 text-white hover:bg-green-700',
            ghost:
                'rounded-md px-2 hover:bg-zinc-200 dark:hover:bg-white/5 shadow-none text-zinc-500 dark:text-zinc-400:',
            outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

export function Button({ variant, ...props }: ButtonProps) {
    return (
        <button {...props} className={button({ variant })} />
    )
}