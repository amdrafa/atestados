import { Pencil } from "lucide-react";
import { Button } from "../components/Button";
import { Page } from "../shared/Page";
import { Table } from '../shared/Table';

export function Permissions() {
    return (
        <Page.Root>
            <Page.Header title='Users' />
            <Page.Content>
                <Table.Root>
                    <Table.Header>
                        <Table.ColumnRow>
                            <Table.ColumnHeaderCell>
                                NAME
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                EDV
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                E-MAIL                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                LOCATION
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                ROLE
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                STATUS
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                .
                            </Table.ColumnHeaderCell>
                        </Table.ColumnRow>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <td className="py-2 px-4 text-left border-b flex gap-3 items-center h-20">
                                <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-zinc-700">Rafael Amaro</span>
                                    <span>moa2jvl@bosch.com</span>
                                </div>
                            </td>
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellStatus status="active" />
                            <Table.Cell>
                                <Button variant='ghost'>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>


                        <Table.Row>
                            <td className="py-2 px-4 text-left border-b flex gap-3 items-center h-20">
                                <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-zinc-700">Rafael Amaro</span>
                                    <span>moa2jvl@bosch.com</span>
                                </div>
                            </td>
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellStatus status="active" />
                            <Table.Cell>
                                <Button variant='ghost'>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <td className="py-2 px-4 text-left border-b flex gap-3 items-center h-20">
                                <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-zinc-700">Rafael Amaro</span>
                                    <span>moa2jvl@bosch.com</span>
                                </div>
                            </td>
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellStatus status="inactive" />
                            <Table.Cell>
                                <Button variant='ghost'>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <td className="py-2 px-4 text-left border-b flex gap-3 items-center h-20">
                                <img src="https://github.com/amdrafa.png" alt="User profile picture" className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-zinc-700">Rafael Amaro</span>
                                    <span>moa2jvl@bosch.com</span>
                                </div>
                            </td>
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellStatus status="pending" />
                            <Table.Cell>
                                <Button variant='ghost'>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table.Root>
            </Page.Content>
        </Page.Root>
    )
}