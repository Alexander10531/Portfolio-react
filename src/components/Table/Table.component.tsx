import './Table.css'
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TablePagination } from '@mui/material';
import type { TableProps } from '../../interfaces/Table';
import { TableHeadComponent } from '../TableHead/Table.head.component';
import TableBodyComponent from '../TableBody/Table.body.component';


export default function StickyHeadTable({ columns, rows } : TableProps) {

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHeadComponent columns={columns} rows={rows} />
					<TableBodyComponent rows={rows} columns={columns} />
				</Table>
			</TableContainer>
			<TablePagination
				sx={{ backgroundColor: '#242424', color: 'white' }}
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage} />
		</Paper>
	);
}