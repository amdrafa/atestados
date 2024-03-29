import { TableBody } from "./TableBody";
import { TableCellProfile } from "./TableCelProfile";
import { TableCellRequestStatus } from "./TableCelRequestStatus";
import { TableCellUserStatus } from "./TableCelStatus";
import { TableCell } from "./TableCell";
import { TableColumnHeaderCell } from "./TableColumnHeaderCell";
import { TableColumnRow } from "./TableColumnRow";
import { TableHeader } from "./TableHeader";
import { TableRoot } from "./TableRoot";
import { TableRow } from "./TableRow";

export const Table = {
    Root: TableRoot,
    Header: TableHeader,
    Row: TableRow,
    ColumnRow: TableColumnRow,
    ColumnHeaderCell: TableColumnHeaderCell,
    Body: TableBody,
    Cell: TableCell,
    CellUserStatus: TableCellUserStatus,
    CellRequestStatus: TableCellRequestStatus,
    CellProfile: TableCellProfile
}