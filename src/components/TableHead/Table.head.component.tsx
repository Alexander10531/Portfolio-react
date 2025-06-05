import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import type { TableProps } from "../../interfaces/Table";
import { Skeleton } from '@mui/material';

export function TableHeadComponent({ columns, rows }: TableProps) {

    if (rows.length == 0) {
        return (<TableHead>
            <TableRow>
                <TableCell
                    sx={{ backgroundColor: '#121212', color: 'white', minWidth:"500px" }}>
                    <Skeleton
                        variant="text"
                        width="100%"
                        sx={{ background: "#101010" }} />
                </TableCell>
            </TableRow>
        </TableHead>)
    }

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