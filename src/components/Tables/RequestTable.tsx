import { Table } from "../../shared/Table";

export function RequestTable() {
    return (
        <Table.Root>
            <Table.Header>
                <Table.ColumnRow>
                    <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>EDV</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Start Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>End Date</Table.ColumnHeaderCell>
                </Table.ColumnRow>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                    <Table.Cell>João</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    )
}