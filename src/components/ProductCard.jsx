import { Link } from "react-router-dom";
import "./index.css"

export default function ProductCard({product}){
    return(
        <>
        <article className="article">
            <h3>
                {product.title}
            </h3>
            <img src={product.image} alt={product.title} className="imagen"/>
            <h4 className="precio">${product.price}</h4>
            <Link to={`/product/${product.id}`} className="button">Más detalles
            </Link>
        </article>
        </>
    );
}