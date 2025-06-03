import type { Column } from '../../interfaces/Table';

export const columns: readonly Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		format: (value: number) => value.toLocaleString('en-US'),
	}
];
