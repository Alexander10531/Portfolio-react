export interface Column {
	id: string;
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

export interface Data {
	name: string;
	code: string;
	population: number;
	size: number;
	density: number;
}

export interface TableProps {
	currentPage: number; 
	columns: readonly Column[];
	rows : String[][]; 
	totalCount: number;
	nextPageFunction: (page : number) => void;
}