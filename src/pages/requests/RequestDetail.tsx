import * as Input from '../../components/Input'
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Page } from "../../shared/Page";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';



export function RequestDetail() {

    const schema = z.object({
        name: z.string().min(6, "O nome deve ter no mínimo 6 caracteres."),
        lastname: z.string().min(6, "O último nome deve ter no mínimo 6 caracteres."),
        email: z.string().email("Informe um e-mail válido"),
        phone: z.string().min(8, "Informe um número de telefone válido")
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
            <Page.Header title='Request Detail' />
            <Page.Content>
                <Form.Root onSubmit={handleSubmit(handleSubmitTest)}>
                    <Form.Grid>
                        <Form.Label htmlFor='name'>First Name</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('name')}
                                id="name"
                                type="text"
                                defaultValue={"Rafael"} />

                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.name?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='name'>Last Name</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('lastname')}
                                id="name"
                                type="text"
                                defaultValue={"Rafael"} />

                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.lastname?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='email'>E-mail</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('email')}
                                id="email"
                                type="text"
                                defaultValue={"moa2jvl@bosch.com"} />

                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.email?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='name'>Phone</Form.Label>
                        <Input.Root >
                            <Input.Control
                                {...register('phone')}
                                id="phone"
                                type="text"
                                defaultValue={"47992479009"} />

                        </Input.Root>
                        <Input.ErrorMessage>
                            {errors.phone?.message}
                        </Input.ErrorMessage>
                    </Form.Grid>

                    <Page.Actions>
                        <Button variant="outline">Cancel</Button>
                        <Button type='submit' variant="primary">Save</Button>
                    </Page.Actions>
                </Form.Root>
            </Page.Content>
        </Page.Root>
    )
}