import * as Input from '../../components/Input'
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Page } from "../../shared/Page";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// import { Select } from '../../components/Select/Index';
// import { SelectItem } from '../../components/Select/SelectItem';
import { ProfileInfo } from '../../components/RequestProfile.tsx';
import { PageDescription } from '../../shared/Page/PageDescription.tsx';
import { useNavigate } from 'react-router-dom';




export function UserForm() {

    const navigate = useNavigate()

    const userSchema = z.object({
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

    type userFormData = z.infer<typeof userSchema>



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userFormData>({
        resolver: zodResolver(userSchema),
    });

    function handleSubmitTest(e: unknown) {
        console.log(e)
    }

    return (
        <Page.Root>
            <PageDescription>
                <Page.DescriptionInfo
                    title="Edit user"
                    description="Update informations and authorizations here."
                />
                <Page.DescriptionActions>
                    <Button type="button" variant="outline" onClick={() => navigate('/users')}>Cancel</Button>
                    <Button type="submit" variant="primary">Save</Button>
                </Page.DescriptionActions>
            </PageDescription>
            <Page.Content>
                <ProfileInfo
                    name='Rafael Amaro'
                    email='moa2jvl@bosch.com'
                    edv='3202394'
                    status='active'
                />
                <Form.Root onSubmit={handleSubmit(handleSubmitTest)}>

                    <Form.Grid>
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
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='edv'>EDV</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('edv')}
                                id="edv"
                                type="number"
                            />

                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.edv?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='email'>E-mail</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('issuerName')}
                                id="issuerName"
                                type="email"
                                defaultValue={"moa2jvl@bosch.com"}
                            />
                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.issuerName?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>


                    <Form.Grid>
                        <Form.Label htmlFor='council'>Location</Form.Label>
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

                    {/* <Form.Grid>
                        <Form.Label htmlFor='uf'>Role</Form.Label>
                        <Select
                            {...register('uf')}
                            placeholder="Select a role..."
                        >
                            <SelectItem value="admin" text="Admin" />
                            <SelectItem value="user" text="User" />
                        </Select>
                        <Input.ErrorMessage>
                            {errors.uf?.message}
                        </Input.ErrorMessage>
                    </Form.Grid> */}

                    {/* <Form.Grid>
                        <Form.Label htmlFor='uf'>Status</Form.Label>
                        <Select
                            {...register('uf')}
                            placeholder="Select a status..."
                        >
                            <SelectItem value="active" text="Active" />
                            <SelectItem value="inactive" text="Inactive" />
                        </Select>
                        <Input.ErrorMessage>
                            {errors.uf?.message}
                        </Input.ErrorMessage>
                    </Form.Grid> */}



                    {/* <div className='flex flex-col justify-center space-y-2'>
                        <Button type='submit' variant="green">Approve</Button>
                        <Button type='submit' variant="yellow">Readjust</Button>
                        <Button type='submit' variant="red">Reject permanently</Button>

                    </div> */}

                    {/* <Page.Actions>
                        <Button type='submit' variant="outline">Return</Button>
                        <Button type='submit' variant="primary">Save</Button>
                    </Page.Actions> */}
                </Form.Root>

            </Page.Content>
        </Page.Root>
    )
}