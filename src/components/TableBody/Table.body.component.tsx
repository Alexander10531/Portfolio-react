import { TableBody, TableCell, TableRow } from '@mui/material';
import type { TableProps } from '../../interfaces/Table';

export default function TableBodyComponent({ rows }: TableProps) {

    return (
        <TableBody>
            {
                rows.map((row: String[], index) => {
                    return (
                        <TableRow className='fila-tabla' key={index}>
                            {
                                row.map((cell, indexColumn) => {
                                    return (
                                        <TableCell className='tabla-fila' key={`${index}-${indexColumn}`}>{cell}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    )
                })
            }
        </TableBody>
    )

}