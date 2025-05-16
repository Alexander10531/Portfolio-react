import './Table.css'
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { columns } from './Table.columns'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { getProducts } from './serviceProducts';
import TableContainer from '@mui/material/TableContainer';
import { TableBody, TablePagination } from '@mui/material';
import type { ProductList } from '../../interfaces/Product';


function createData(idProduct: string, nameProduct: string, modelProduct: string) {
	return [idProduct, nameProduct, modelProduct, "asd", "asd" ]; 
}

export default function StickyHeadTable() {

	const [rows, setRows] = React.useState<any[]>([]);

	React.useEffect(() => {
		getProducts().then((response: ProductList) => {
			let data = response.data.map((product) => {
				return createData(
					product.idProduct.toString(),
					product.nameProduct,
					product.modelProduct,
				);
			});
			setRows(data);
		});
	}, []);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	if (!rows) {
		return <div>Loading...</div>;
	}
	if (rows.length === 0) {
		return <div>No data available</div>;
	}	
	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
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
					</TableHead>
					<TableBody>
							{
								rows.map((row : String[], index) => {
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