import React, { useEffect } from "react";
import { getProducts } from "../../components/Table/serviceProducts";
import DataTable from "../../components/Table/Table.component";
import { columns } from '../../components/Table/Table.columns';
import type { ProductList } from "../../interfaces/Product";

const Dashboard: React.FC = () => {

    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState<string[][]>([]);
    const [totalCount, setTotalCount] = React.useState(0);
    const greaterPage = React.useRef(0);

    function createData(idProduct: string, nameProduct: string, modelProduct: string) {
        return [idProduct, nameProduct, modelProduct];
    }

    function extractData(page: number) {

        if(greaterPage.current >= page) {
            return; 
        }

        greaterPage.current = page;

        getProducts(page).then((response: ProductList) => {
            setTotalCount(response.count);
            let previousData = rows; 
            let data = response.data.map((product) => {
                return createData(
                    product.idProduct.toString(),
                    product.nameProduct,
                    product.modelProduct,
                );
            });
            
            // if(page > greaterPage.current) {
            //     greaterPage.current = page;
            // }

            setRows([...previousData, ...data]);  
        });

    }

    return (
        <>
            <DataTable
                currentPage={page}
                columns={columns}
                rows={rows}
                totalCount={totalCount}
                nextPageFunction={extractData}
            />
        </>
    );

}

export default Dashboard;