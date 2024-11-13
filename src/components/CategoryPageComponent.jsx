import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../asyncMock";
import { Link } from "react-router-dom";

const CategoryPage = () =>{
    const { category } = useParams();
    console.log(category);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const products = getProductByCategory(category);
        console.log(products);
        setFilteredProducts(products);
    }, [category]);

    return (
      <div className="color-fondo">
            <h2 className="productos-de-cat">Productos de {category}</h2>
            {filteredProducts.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="container">
        {filteredProducts.map(product => (
          <article key={product.id} className="article-category">
            <h3>
                {product.title}
            </h3>
            <img src={product.image} alt={product.title} className="imagen"/>
            <h4 className="precio">${product.price}</h4>
            <Link to={`/product/${product.id}`} className="button">Más detalles
            </Link>
          </article>
        ))}
        </div>
      )}
      </div>
    );
}

export default CategoryPage;