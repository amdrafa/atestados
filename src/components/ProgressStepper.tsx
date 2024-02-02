import * as Progress from '@radix-ui/react-progress';

interface ProgressStepperProps {
    progress: number;
}

export function ProgressStepper({ progress }: ProgressStepperProps) {
    return (
        <div className='flex items-center lg:grid lg:grid-cols-form gap-3 bg-primary-25 p-4 rounded-lg'>
            <div className='whitespace-nowrap text-zinc-600'>Stage {progress} of 100%</div>
            <Progress.Root
                className="relative overflow-hidden bg-primary-50 rounded-full w-full h-[25px]"
                style={{
                    transform: 'translateZ(0)',
                }}
                value={progress}

            >
                <Progress.Indicator
                    className="bg-primary-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                    style={{ transform: `translateX(-${100 - progress}%)` }}
                />
            </Progress.Root>
        </div>
    )
}