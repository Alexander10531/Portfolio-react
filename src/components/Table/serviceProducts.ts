import axios from "axios";
import type { newProductRequest, ProductList } from "../../interfaces/Product";

export const getProducts = async (page: number): Promise<ProductList> => {
    const url = `http://localhost:3000/product/getProductList?page=${page}&pageSize=50`;
    const response = await axios.get(
        url,
        {
            headers: {
                "Content-Type": "application/json",
                "public-key": "GU/l26uhU8uDEB5q0OZQR7jjhaXJ1YFvnjN4TC61hy4=",
                "signature": "2tm3fqEfSt2d7FHIoNBXNCe1MxLYV+Cc6zVB0bQiD5JbGy8uvM1PeQMHQZxcOefxyjvXUiOB1GnEd0svHgHMBg==",
                "x-api-key": "5038a3cb4306baffc4cc26a3720ccc07b84babce7f714007d401f7fce1a10460",
                "request-id": "433c4770-3da7-4905-a665-965fde0f8b15",
            },
        });
    return response.data;
}

export const createProduct = async (formData : newProductRequest): Promise<String> => {

    const url = `http://localhost:3000/product`;
    const response = await axios.post(
        url,
        formData,
        {
              headers: {
                "Content-Type": "application/json",
                "public-key": "GU/l26uhU8uDEB5q0OZQR7jjhaXJ1YFvnjN4TC61hy4=",
                "signature": "2tm3fqEfSt2d7FHIoNBXNCe1MxLYV+Cc6zVB0bQiD5JbGy8uvM1PeQMHQZxcOefxyjvXUiOB1GnEd0svHgHMBg==",
                "x-api-key": "5038a3cb4306baffc4cc26a3720ccc07b84babce7f714007d401f7fce1a10460",
                "request-id": "433c4770-3da7-4905-a665-965fde0f8b15",
            }
        }, 
        
    )
    return response.data; 

}