import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import type { TableProps } from "../../interfaces/Table";

export function TableHeadComponent({ columns }: TableProps) {
    return (<TableHead>
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    sx={{ backgroundColor: '#121212', color: 'white' }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>);
}