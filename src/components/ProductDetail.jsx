import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock"; 
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
    const { prodId } = useParams();
    const productId = parseInt(prodId);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const handleClick = () => {
        const productWithQuantity = { ...product, quantity };
        addItem(productWithQuantity);
    };

    const increaseQuantity = () =>{
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () =>{
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

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
                <img src={product.image} alt={product.title} className="imagen"/>
                <h2>Nombre: {product.title}</h2>
                <h3 className="precio">Precio: ${product.price}</h3>
                <p>Categoria: {product.category}</p>
                <p>Id: {prodId}</p>
                <p>Descripcion: {product.description}</p>
                <div>
                    <button onClick={decreaseQuantity} className="button-sign-minus">-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity} className="button-sign-plus">+</button>
                </div>
                <button onClick={handleClick}>Añadir al carrito</button>
            </article>
        </div>
        </>
    );
}