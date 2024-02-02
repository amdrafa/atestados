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
import { useFileInput } from '../../components/FileInput/Root';


export function UserRequestCreate() {

    const maxFileSize = 2000000
    const acceptedImageTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
    ]

    const { files } = useFileInput()

    const [progress, setProgress] = useState(0);

    const [filetest, setfiletest] = useState<FileList | null>()

    useEffect(() => {
        const timer = setTimeout(() => setProgress(25), 500);
        return () => clearTimeout(timer);
    }, []);

    const imageSchema = z.any()
        // To not allow empty files
        .refine((files) => files?.length >= 1, { message: 'Photo is required.' })
        // To not allow files other than images
        .refine((files) => acceptedImageTypes.includes(files?.[0]?.type), {
            message: '.jpg, .jpeg, .png and .webp files are accepted.',
        })
        // To not allow files larger than 5MB
        .refine((files) => files?.[0]?.size <= maxFileSize, {
            message: `Max file size is 2MB.`,
        }).optional()

    const newRequestSchema = z.object({
        issuerName: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        council: z.string(),
        uf: z.string(),
        register: z.string(),
        leaveCommencement: z.string(),
        leaveTermination: z.string(),
        image: imageSchema
    });

    type newRequestFormData = z.infer<typeof newRequestSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<newRequestFormData>({
        resolver: zodResolver(newRequestSchema),
    });

    function handleSubmitTest(e: unknown) {
        console.log(files)
        // console.log(e)
    }


    return (
        <Page.Root>
            <Page.Header title='Create request' />
            <Page.Content>
                <ProgressStepper
                    progress={progress}
                    step={1}
                    totalSteps={4}
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
                        {/* <Input.ErrorMessage>
                        </Input.ErrorMessage> */}
                    </Form.Grid>


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
                    </Form.Grid>





                    <Page.Actions>
                        <Button variant="outline">Cancel</Button>
                        <Button type='submit' variant="primary">Next</Button>
                    </Page.Actions>
                </Form.Root>
            </Page.Content>
        </Page.Root >
    )
}