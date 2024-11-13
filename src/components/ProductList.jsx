import { useEffect, useState } from "react";
import {getProducts} from '../asyncMock'
import ProductCard from "./ProductCard";

export default function ProductList(){
    const [productos, setProducts] = useState([]);
    useEffect(()=>{
        getProducts.then((datos)=> setProducts(datos));
    }, []);

    return(
        <>
            <section className="product-list">
                {productos.map((product)=>(
                    <ProductCard key={product.id} product={product}/> 
                ))}
            </section>
        </>
    );
}