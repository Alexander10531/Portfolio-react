export interface Product {

    idProduct: number;
    nameProduct: string;
    entryDate: Date;
    modelProduct: string;
    idCategory: number;
    idState: number;
    
}

export interface ProductList{

    mensaje : String; 
    data : Product[];
    count : number;

}

export interface newProductRequest{

    nombreProducto : String; 
    modeloProducto : String; 
    idCategoria : number; 
    idEstado : number; 

}