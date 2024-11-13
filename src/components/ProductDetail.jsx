import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";

export default function ProductDetail() {
    const { prodId } = useParams();
    const productId = parseInt(prodId);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchedProduct = getProductById(productId);
        setProduct(fetchedProduct);
    }, [productId]);

    if (!product) return <p>Cargando....</p>

    return(
        <>
        <div className="color-fondo">
            <h2>Detalles de producto {prodId}</h2>
            <article className="article-detail">
                <p>Id del producto: {product.id}</p>
                <img src={product.image} alt={product.title} className="imagen"/>
                <h2>Nombre: {product.title}</h2>
                <h3 className="precio">Precio: ${product.price}</h3>
                <p>Categoria: {product.category}</p>
                <p>Descripcion: {product.description}</p>
            </article>
        </div>
        </>
    );
}