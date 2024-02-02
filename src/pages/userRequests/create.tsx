import * as Input from '../../components/Input'
import * as FileInput from '../../components/FileInput'
import { Select } from "../../components/Select/Index";
import { SelectItem } from "../../components/Select/SelectItem";
import { Button } from "../../components/Button";
import { Page } from "../../shared/Page";
import { Form } from '../../components/Form';
import { useState, useEffect } from 'react';
import { ProgressStepper } from '../../components/ProgressStepper';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RequestUploadAdvice } from '../../components/RequestUploadAdvice';
import { useFileForm } from '../../contexts/FileFormContext.tsx/context';
import { toast } from 'react-toastify';


export function UserRequestCreate() {

    const totalSteps = 5;

    const { files } = useFileForm()

    const [progress, setProgress] = useState(100 / totalSteps);

    function nextStep() {
        if (progress < 100) {
            setProgress(progress + (100 / totalSteps))
        }
    }

    function backStep() {
        if (progress > 0) {
            setProgress(progress - (100 / totalSteps))
        }
    }


    const newRequestSchema = z.object({
        issuerName: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        council: z.string(),
        uf: z.string(),
        register: z.string(),
        leaveCommencement: z.string(),
        leaveTermination: z.string(),
    });

    type newRequestFormData = z.infer<typeof newRequestSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<newRequestFormData>({
        resolver: zodResolver(newRequestSchema),
    });

    function handleSubmitTest(data: newRequestFormData) {
        if (!files) {
            toast.error('Envie o arquivo do atestado.')
            return;
        }
        console.log(files)
        console.log(data)
    }




    return (
        <Page.Root>
            <Page.Header title='Create request' />
            <Page.Content>
                <ProgressStepper
                    progress={progress}
                />


                <Form.Root onSubmit={handleSubmit(handleSubmitTest)}>
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


                    {/* <Form.Grid>
                        <Form.Label htmlFor='issuerName'>Issuer's name</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('issuerName')}
                                id="issuerName"
                                type="text"
                            />
                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.council?.message}
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
                        <Select
                            {...register('uf')}
                            placeholder="Select a state..."
                        >
                            <SelectItem value="SC" text="SC" />
                            <SelectItem value="SP" text="SP" />
                        </Select>
                        <Input.ErrorMessage>
                            {errors.uf?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='uf'>UF TEMPORARY FAKE</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('uf')}
                                id="uf"
                                type="text"
                            />
                        </Input.Root>
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
                    </Form.Grid> */}





                    <Page.Actions>
                        <Button onClick={() => backStep()} variant="outline">Return</Button>
                        <Button onClick={() => nextStep()} variant="primary">Next</Button>
                    </Page.Actions>
                </Form.Root>
            </Page.Content>
        </Page.Root >
    )
}