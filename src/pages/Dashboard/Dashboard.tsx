import React from "react";
import { getProducts } from "../../components/Table/serviceProducts";
import DataTable from "../../components/Table/Table.component";
import { columns } from '../../components/Table/Table.columns';
import type { ProductList } from "../../interfaces/Product";

const Dashboard: React.FC = () => {

    const [rows, setRows] = React.useState<any[]>([]);
    
    function createData(idProduct: string, nameProduct: string, modelProduct: string) {
        return [idProduct, nameProduct, modelProduct, "asd", "asd"];
    }

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

    if(rows.length === 0){
        return(<span>Loading...</span>); 
    }

    return (
        <>
            <DataTable columns={columns} rows={rows}  />
        </>
    );

}

export default Dashboard;