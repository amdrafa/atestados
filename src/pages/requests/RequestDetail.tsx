import * as Input from '../../components/Input'
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Page } from "../../shared/Page";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Select } from '../../components/Select/Index';
import { SelectItem } from '../../components/Select/SelectItem';
import { ArrowLeft, CheckSquare2 } from 'lucide-react';
import { RequestProfile } from '../../components/requestProfile.tsx';



export function RequestDetail() {

    const schema = z.object({
        name: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        edv: z.number().min(6, "O último nome deve ter no mínimo 6 caracteres."),
        issuerName: z.string().email("Informe um e-mail válido"),
        council: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        uf: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        register: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        leaveCommencement: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        leaveTermination: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        email: z.string().email("Informe um e-mail válido"),
        phone: z.string().min(8, "Informe um número de telefone válido"),
        adminComment: z.string().max(400, "O nome deve ter no mínimo 6 caracteres.")
    });

    type formDataTest = z.infer<typeof schema>



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formDataTest>({
        resolver: zodResolver(schema),
    });

    function handleSubmitTest(e: unknown) {
        console.log(e)
    }

    return (
        <Page.Root>
            <Page.RequestHeader>
                <div className='flex items-center gap-1'>
                    <ArrowLeft />
                    Request - 398472
                </div>
                <div className='flex justify-center text-boschGreen-500 text-xl items-center gap-1'>
                    <CheckSquare2 />  Aprovada
                </div>
            </Page.RequestHeader>
            <Page.Content>


                <div className='flex flex-col '>

                    <RequestProfile />

                    <div>

                        {/* <div className='flex flex-col items-center space-y-6 '>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-primary-500 font-bold text-xl'>Atestado médico</div>
                                <div className='text-lg'><span className='text-primary-500'>12 dias</span> de afastamento</div>
                            </div>
                            <div> Retornará dia <span className='text-green-500'>30/01/24</span>.</div>
                        </div> */}
                    </div>
                </div>

                <Form.Root onSubmit={handleSubmit(handleSubmitTest)}>

                    {/* <Form.Grid>
                        <Form.Label htmlFor='name'>Name</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('name')}
                                id="name"
                                type="text"
                            />
                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.name?.message}
                        </Input.ErrorMessage>
                    </Form.Grid> */}

                    {/* <Form.Grid>
                        <Form.Label htmlFor='edv'>EDV</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('edv')}
                                id="edv"
                                type="text"
                            />

                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.edv?.message}
                        </Input.ErrorMessage>
                    </Form.Grid> */}

                    <Form.Grid>
                        <Form.Label htmlFor='issuerName'>Issuer's name</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('issuerName')}
                                id="issuerName"
                                type="text"
                                defaultValue={"Dr. Carlos Silva"}
                                disabled
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
                                defaultValue={"CRM"}
                                disabled
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
                            placeholder="Select a country..."
                        >
                            <SelectItem value="SC" text="SC" />
                            <SelectItem value="SP" text="SP" />
                        </Select>
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
                                defaultValue={"31231421"}
                                disabled
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

                    <Form.Grid>
                        <Form.Label htmlFor='adminComment'>Comment</Form.Label>
                        <Input.Root >
                            <Input.TextArea
                                {...register('adminComment')}
                                id="adminComment"
                                rows={5}
                            />
                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.name?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    {/* <div className='flex flex-col justify-center space-y-2'>
                        <Button type='submit' variant="green">Approve</Button>
                        <Button type='submit' variant="yellow">Readjust</Button>
                        <Button type='submit' variant="red">Reject permanently</Button>

                    </div> */}

                    <Page.Actions>
                        <Button type='submit' variant="blue">Readjust</Button>
                        <Button type='submit' variant="red">Reject permanently</Button>
                        <Button type='submit' variant="green">Approve</Button>
                    </Page.Actions>
                </Form.Root>

            </Page.Content>
        </Page.Root>
    )
}