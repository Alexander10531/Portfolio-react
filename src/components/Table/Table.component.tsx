import './Table.css'
import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TablePagination } from '@mui/material';
import type { TableProps } from '../../interfaces/Table';
import { TableHeadComponent } from '../TableHead/Table.head.component';
import TableBodyComponent from '../TableBody/Table.body.component';


export default function StickyHeadTable({ columns, rows, currentPage, nextPageFunction, totalCount }: TableProps) {

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(50);

	React.useEffect(() => {
		nextPageFunction(page + 1); 
	}, [page]);

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
					<TableHeadComponent totalCount={totalCount} currentPage={currentPage} columns={columns} rows={rows} nextPageFunction={nextPageFunction} />
					<TableBodyComponent totalCount={totalCount} currentPage={currentPage} rows={rows.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)} columns={columns} nextPageFunction={nextPageFunction} />
				</Table>
			</TableContainer>
			<TablePagination
				className='table-pagination'
				rowsPerPageOptions={[50]}
				component="div"
				count={totalCount}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}