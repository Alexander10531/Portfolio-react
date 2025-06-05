import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material';
import type { TableProps } from '../../interfaces/Table';

export default function TableBodyComponent({ rows, columns }: TableProps) {

    if (rows.length == 0) {
        return (
            <TableBody>
                {Array.from({ length: 5 }).map((_, index) => (
                    <TableRow 
                        className="fila-tabla" key={index}>
                        <TableCell
                            colSpan={ columns.length } 
                            className="tabla-fila">
                            <Skeleton
                                variant="text"
                                width="100%"
                                sx={{ background: "#101010" }}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        )
    }

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