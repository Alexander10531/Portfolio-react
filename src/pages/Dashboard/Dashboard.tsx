import React from "react";
import './Dashboard.css';
import ModalForm from "../../components/Modal/Modal-form";
import type { ProductList } from "../../interfaces/Product";
import { columns } from '../../components/Table/Table.columns';
import DataTable from "../../components/Table/Table.component";
import { getProducts } from "../../components/Table/serviceProducts";

const Dashboard: React.FC = () => {

    const [page] = React.useState(0);
    const greaterPage = React.useRef(0);

    const [rows, setRows] = React.useState<string[][]>([]);
    const [totalCount, setTotalCount] = React.useState(0);

    function createData(idProduct: string, nameProduct: string, modelProduct: string) {
        return [idProduct, nameProduct, modelProduct];
    }

    function extractData(page: number) {

        if (greaterPage.current >= page) {
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

            setRows([...previousData, ...data]);

        });

    }

    return (
        <>
            <ModalForm
                className="trigger-button"/>
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
