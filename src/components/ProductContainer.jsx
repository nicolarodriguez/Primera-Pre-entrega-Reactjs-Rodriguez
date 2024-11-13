import ProductList from "./ProductList";

export default function ProductContainer(){
    return(
        <>
        <h1 className="productos-dispo">Productos disponibles</h1>
        <ProductList/>
        </>
    );
}