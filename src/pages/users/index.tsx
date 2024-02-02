import { Pencil } from "lucide-react";
import { Button } from "../../components/Button";
import { Page } from "../../shared/Page";
import { Table } from '../../shared/Table';
import { useNavigate } from "react-router-dom";

export function Users() {

    const navigate = useNavigate()

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
                                E-MAIL
                            </Table.ColumnHeaderCell>
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

                            </Table.ColumnHeaderCell>
                        </Table.ColumnRow>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.CellProfile
                                name="Rafael Amaro"
                                email="moa2jvl@bosch.com"
                            />
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellUserStatus status="active" />
                            <Table.Cell>
                                <Button variant='ghost' onClick={() => navigate('/users/123')}>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>


                        <Table.Row>
                            <Table.CellProfile
                                name="Rafael Amaro"
                                email="moa2jvl@bosch.com"
                            />
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellUserStatus status="active" />
                            <Table.Cell>
                                <Button variant='ghost' onClick={() => navigate('/users/123')}>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.CellProfile
                                name="Rafael Amaro"
                                email="moa2jvl@bosch.com"
                            />
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellUserStatus status="inactive" />
                            <Table.Cell>
                                <Button variant='ghost' onClick={() => navigate('/users/123')}>
                                    <Pencil className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.CellProfile
                                name="Rafael Amaro"
                                email="moa2jvl@bosch.com"
                            />
                            <Table.Cell>433733</Table.Cell>
                            <Table.Cell>moa2jvl@bosch.com</Table.Cell>
                            <Table.Cell>Joinville</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.CellUserStatus status="pending" />
                            <Table.Cell>
                                <Button variant='ghost' onClick={() => navigate('/users/123')}>
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