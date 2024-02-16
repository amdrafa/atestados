import * as Input from '../../components/Input'
import * as FileInput from '../../components/FileInput'
import * as Select from '../../components/Select'
import { SelectItem } from "../../components/Select/SelectItem";
import { Button } from "../../components/Button";
import { Page } from "../../shared/Page";
import { Form } from '../../components/Form';
import { useState, useEffect } from 'react';
import { ProgressStepper } from '../../components/ProgressStepper';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RequestUploadAdvice } from '../../components/RequestUploadAdvice';
import { useFileForm } from '../../contexts/FileFormContext.tsx/context';
import { toast } from 'react-toastify';
import { TimezonesSelect } from '../../components/TimezoneSelect';
import { brazilianStates } from '../../components/utils/brazilStates';
import { Clock } from 'lucide-react';


export function UserRequestCreate() {

    const steps = [
        {
            id: 'Step 1',
            name: 'Personal Information',
            fields: ['']
        },
        {
            id: 'Step 2',
            name: 'Address',
            fields: ['issuerName', 'council', 'register', 'leaveCommencement', 'leaveTermination']
        },
        {
            id: 'Step 3',
            name: 'Address',
            fields: ['issuerName', 'council', 'register', 'leaveCommencement', 'leaveTermination']
        },
        { id: 'Step 4', name: 'Complete' },
    ]

    const newRequestSchema = z.object({
        issuerName: z.string().min(6, "Minimum 6 characteres."),
        council: z.string().min(6, "Minimum 2 characteres."),
        // uf: z.string().refine((value => {
        //     return !value ? false : true
        // }), "Select a valid UF"),
        uf: z.string().min(1, "min 1"),
        register: z.string().min(5, "Minimum 5 characteres."),
        observation: z.string().optional(),
        leaveCommencement: z.string(),
        leaveTermination: z.string(),
    });

    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const delta = currentStep - previousStep

    const { files } = useFileForm()


    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep(step => step - 1)
        }
    }

    type newRequestFormData = z.infer<typeof newRequestSchema>

    type FieldName = keyof newRequestFormData;

    const {
        register,
        handleSubmit,
        trigger,
        control,
        formState: { errors },
        getFieldState
    } = useForm<newRequestFormData>({
        resolver: zodResolver(newRequestSchema),
        // mode: 'all'
    });

    function handleSubmitTest(data: newRequestFormData) {

        console.log(getFieldState('uf'))
        console.log(data)
    }

    const next = async () => {

        if (files.length < 1) {
            toast.error("Please upload your certificate.")
            return;
        }

        const fields = steps[currentStep].fields
        const output = await trigger(fields as FieldName[], { shouldFocus: true })

        if (!output) return

        window.scrollTo(0, 0);


        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                await handleSubmit(handleSubmitTest)()
            }
            setPreviousStep(currentStep)
            setCurrentStep(step => step + 1)
        }
    }




    return (
        <Page.Root>
            <Page.Header title='Create request' />
            <Page.Content>
                <nav aria-label='Progress'>
                    <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0 mb-4'>
                        {steps.map((step, index) => (
                            <li key={step.name} className='md:flex-1 bg-zinc-50 md:bg-transparent'>
                                {currentStep > index ? (
                                    <div className='group flex w-full flex-col border-l-4 border-primary-500 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                                        <span className='text-sm font-medium text-primary-500 transition-colors '>
                                            {step.id}
                                        </span>
                                        <span className='text-sm font-medium'>{step.name}</span>
                                    </div>
                                ) : currentStep === index ? (
                                    <div
                                        className='flex w-full flex-col border-l-4 border-primary-500 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                                        aria-current='step'
                                    >
                                        <span className='text-sm font-medium text-primary-500'>
                                            {step.id}
                                        </span>
                                        <span className='text-sm font-medium'>{step.name}</span>
                                    </div>
                                ) : (
                                    <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                                        <span className='text-sm font-medium text-gray-500 transition-colors'>
                                            {step.id}
                                        </span>
                                        <span className='text-sm font-medium'>{step.name}</span>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>


                <Form.Root onSubmit={handleSubmit(handleSubmitTest)}>


                    {currentStep == 0 && (
                        <>
                            <RequestUploadAdvice />
                            <Form.Grid >
                                <Form.Label>
                                    Upload your certificate here.
                                    <span className="block text-sm font-normal mt-0.5 text-zinc-500">Maximum of 3 files (PDF, JPG, PNG).</span>
                                </Form.Label>

                                <FileInput.Root>
                                    <FileInput.Trigger />
                                    <FileInput.FileList />
                                    <FileInput.Control
                                    />
                                </FileInput.Root>
                            </Form.Grid>
                        </>
                    )}

                    {currentStep == 1 && (
                        <>
                            <Form.Grid>
                                <Form.Label htmlFor='issuerName'>Issuer's name</Form.Label>
                                <Input.Root >
                                    <Input.Control
                                        {...register('issuerName')}
                                        id="issuerName"
                                        type="text"
                                    />
                                </Input.Root>
                                <Input.ErrorMessage>
                                    {errors.issuerName?.message}
                                </Input.ErrorMessage>
                            </Form.Grid>


                            <Form.Grid>
                                <Form.Label htmlFor='council'>Council</Form.Label>
                                <Input.Root >
                                    <Input.Control
                                        {...register('council')}
                                        id="council"
                                        type="text"
                                    />
                                </Input.Root>
                                <Input.ErrorMessage>
                                    {errors.council?.message}
                                </Input.ErrorMessage>
                            </Form.Grid>

                            <Form.Grid>
                                <Form.Label htmlFor='uf'>UF</Form.Label>
                                <Controller
                                    control={control}
                                    {...register('uf')}
                                    render={({ field }) => (
                                        <Select.Root
                                            onValueChange={field.onChange}
                                            {...field.ref}
                                        >
                                            <Select.Trigger>
                                                <Select.Value placeholder="Select your timezone...">
                                                    {field.value && (
                                                        <>
                                                            {/* <Clock className="h-5 w-5 rounded-full object-cover object-center" /> */}
                                                            {field.value}
                                                        </>
                                                    )}
                                                </Select.Value>
                                            </Select.Trigger>
                                            <Select.Content>
                                                {Object.entries(brazilianStates).map(([label, value]) => {
                                                    return (
                                                        <Select.Item key={value} value={value}>
                                                            {/* <Select.ItemPrefix>
                                                                <Clock className="h-5 w-5 rounded-full object-cover object-center dark:bg-zinc-200" />
                                                            </Select.ItemPrefix> */}
                                                            <Select.ItemText>{label}</Select.ItemText>
                                                        </Select.Item>
                                                    );
                                                })}
                                            </Select.Content>
                                        </Select.Root>
                                    )}
                                />
                                <Input.ErrorMessage>
                                    {errors.uf?.message}
                                </Input.ErrorMessage>
                            </Form.Grid>


                            <Form.Grid>
                                <Form.Label htmlFor='register'>Register</Form.Label>
                                <Input.Root >
                                    <Input.Control
                                        {...register('register')}
                                        id="register"
                                        type="text"
                                    />
                                </Input.Root>
                                <Input.ErrorMessage>
                                    {errors.register?.message}
                                </Input.ErrorMessage>
                            </Form.Grid>

                            <Form.Grid>
                                <Form.Label htmlFor='leaveCommencement'>Commencement of leave</Form.Label>
                                <Input.Root >
                                    <Input.Control
                                        {...register('leaveCommencement')}
                                        id="leaveCommencement"
                                        type="date"
                                    />
                                </Input.Root>
                                <Input.ErrorMessage>
                                    {errors.leaveCommencement?.message}
                                </Input.ErrorMessage>
                            </Form.Grid>


                            <Form.Grid>
                                <Form.Label htmlFor='leaveTermination'>Leave commencement</Form.Label>
                                <Input.Root >
                                    <Input.Control
                                        {...register('leaveTermination')}
                                        id="leaveTermination"
                                        type="date"
                                    />
                                </Input.Root>
                                <Input.ErrorMessage>
                                    {errors.leaveTermination?.message}
                                </Input.ErrorMessage>
                            </Form.Grid>
                        </>
                    )}

                    {currentStep == 2 && (

                        <Form.Grid>
                            <Form.Label htmlFor='observation'>Observation (optional)</Form.Label>
                            <Input.Root >
                                <Input.TextArea
                                    {...register('observation')}
                                    id="observation"
                                    rows={10}
                                />
                            </Input.Root>
                            <Input.ErrorMessage>
                                {errors.issuerName?.message}
                            </Input.ErrorMessage>
                        </Form.Grid>

                    )}

                    {currentStep == 3 && (
                        <div className='flex justify-center my-24 lg:my-40'>
                            <div>
                                <h2 className='text-2xl text-primary-500 font-semibold'>Complete</h2>
                                <span>Thank you for contributing to bosch safety!</span>
                            </div>
                        </div>
                    )}





                    <Page.Actions>

                        {currentStep !== 3 ? (
                            <>
                                <Button
                                    onClick={prev}
                                    disabled={currentStep === 0}
                                    variant="outline"
                                    type='button'
                                >
                                    Return
                                </Button>
                                <Button
                                    type='button'
                                    onClick={next}
                                    disabled={currentStep === steps.length - 1}
                                    variant="primary"
                                >
                                    Next
                                </Button>
                            </>
                        ) :
                            (
                                // <Button
                                //     variant="outline"
                                //     type='button'
                                // >
                                //     Return
                                // </Button>
                                <Button
                                    onClick={prev}

                                    variant="outline"
                                    type='button'
                                >
                                    Return
                                </Button>
                            )}

                    </Page.Actions>
                </Form.Root>
            </Page.Content>
        </Page.Root >
    )
}