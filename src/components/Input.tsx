import React from "react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


interface InputPrefixProps extends ComponentProps<'div'> { }

export function Prefix(props: InputPrefixProps) {
    return <div {...props} />
}

interface InputErrorMessageProps extends ComponentProps<'div'> { }

export function ErrorMessage(props: InputErrorMessageProps) {
    return (
        <div className='text-red-500 px-1 flex items-center hover:text-red-600 hover:cursor-pointer gap-1' {...props} />
    )
}

interface InputControlProps extends ComponentProps<'input'> {
    ref?: React.Ref<HTMLInputElement>;
}


export const Control = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
    return (
        <input
            className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
            {...props}
            ref={ref}
        />
    );
});

interface TextAreaProps extends ComponentProps<'textarea'> {
    ref?: React.Ref<HTMLTextAreaElement>;
    rows?: number;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { rows, ...rest } = props;

    return (
        <textarea
            className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
            rows={rows}
            {...rest}
            ref={ref}
        />
    );
});



export interface InputRootProps extends ComponentProps<'div'> { }

export function Root(props: InputRootProps) {
    return (
        // CSS p/ deixar borrado no foco do input focus-within:ring-4 focus-within:ring-violet-100 
        <div className={twMerge(
            'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
            'focus-within:border-primary-200',
            'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
            props.className,
        )} {...props}>
        </div>
    )
}