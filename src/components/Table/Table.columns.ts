import type { Column } from '../../interfaces/Table';

export const columns: readonly Column[] = [
	{ id: 'idProduct', label: 'id Product', minWidth: 170 },
	{ id: 'name', label: 'Name', minWidth: 100 },
	{
		id: 'model',
		label: 'Model',
		minWidth: 170,
		format: (value: number) => value.toLocaleString('en-US'),
	}
];