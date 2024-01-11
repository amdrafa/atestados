import * as Input from '../components/Input'
import { Mail } from "lucide-react";
import * as FileInput from '../components/FileInput'
import { Select } from "../components/Select/Index";
import { SelectItem } from "../components/Select/SelectItem";
import { Button } from "../components/Button";
import { Page } from "../shared/Page";
import { PageDescription } from "../shared/Page/PageDescription";
import { Form } from '../components/Form';

export function Home() {
    return (
        <Page.Root>
            <Page.Header title='Settings' />
            <Page.Content>
                <PageDescription>
                    <Page.DescriptionInfo
                        title="Personal info"
                        description="Update your photo and personal details here."
                    />
                    <Page.DescriptionActions>
                        <Button type="button" variant="outline">Cancel</Button>
                        <Button type="submit" variant="primary">Save</Button>
                    </Page.DescriptionActions>
                </PageDescription>

                <Form.Root>

                    <Form.Grid>
                        <Form.Label htmlFor='name'>First Name</Form.Label>
                        <Input.Root >
                            <Input.Control id="name" type="email" defaultValue={"Rafael"} />
                        </Input.Root>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='name'>Last name</Form.Label>
                        <Input.Root >
                            <Input.Control id="name" type="email" defaultValue={"Amaro"} />
                        </Input.Root>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label>E-mail</Form.Label>
                        <Input.Root >
                            <Input.Prefix>
                                <Mail className="h-5 w-5 text-zinc-500" />
                            </Input.Prefix>
                            <Input.Control id="email" type="email" defaultValue={"moa2jvl@bosch.com"} />
                        </Input.Root>
                    </Form.Grid>

                    <Form.Grid>
                        <Form.Label htmlFor='email'>teste email</Form.Label>
                        <Input.Root >
                            <Input.Control id="email" type="email" defaultValue={"moa2jvl@bosch.com"} />
                        </Input.Root>
                    </Form.Grid>

                    <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
                        <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Your photo
                            <span className="block text-sm font-normal mt-0.5 text-zinc-500">This will be displayed on your profile.</span>
                        </label>

                        <div>
                            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                                <FileInput.ImagePreview />
                                <FileInput.Trigger />
                                <FileInput.Control />
                            </FileInput.Root>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
                        <label
                            htmlFor="role"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Role
                        </label>
                        <Input.Root >
                            <Input.Control id="role" type="text" defaultValue={"Software developer"} />
                        </Input.Root>
                    </div>

                    <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
                        <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label>
                        <Select placeholder="Select a country...">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                        </Select>
                    </div>

                    <div className="grid gap-3 pt-5 ">
                        <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
                        <Select placeholder="Select a timezone...">
                            <SelectItem
                                value="utc8"
                                text="Pacific Standard Time (UTC-08:00)"
                            />
                            <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
                        </Select>
                    </div>

                    <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
                        <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Portifolio projects
                            <span className="block text-sm font-normal mt-0.5 text-zinc-500">Share a few snippets of your work.</span>
                        </label>

                        <FileInput.Root>
                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                        </FileInput.Root>
                    </div>

                    <Page.Actions>
                        <Button variant="outline">Cancel</Button>
                        <Button variant="primary">Save</Button>
                    </Page.Actions>
                </Form.Root>
            </Page.Content>
        </Page.Root>
    )
}