import { Eye } from "lucide-react";
import { Button } from "../../components/Button";
import { Page } from "../../shared/Page";
import { Table } from '../../shared/Table';
import { useNavigate } from "react-router-dom";

export function UserRequests() {

    const navigate = useNavigate()

    return (
        <Page.Root>
            <Page.Header title='My requests' button={<Button type="button" variant="primary">+ NEW REQUEST</Button>}>
                <p>asddas</p>

            </Page.Header>
            <Page.Content>
                <Table.Root>
                    <Table.Header>
                        <Table.ColumnRow>
                            <Table.ColumnHeaderCell>
                                ID
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                REQUEST TYPE
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                REQUEST DATE
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>
                                LAST UPDATE
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
                            <Table.Cell>132ABC</Table.Cell>
                            <Table.Cell>Health Certificate</Table.Cell>
                            <Table.Cell>29/01/24 - 20:35PM</Table.Cell>
                            <Table.Cell>29/01/24 - 20:35PM</Table.Cell>
                            <Table.CellRequestStatus status="pending" />
                            <Table.Cell>
                                <Button variant='ghost' onClick={() => navigate('/users/123')}>
                                    <Eye className='w-5 h-5' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table.Root>
            </Page.Content>
        </Page.Root>
    )
}