import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartCard() {
  const { cart, removeItem } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  }

  return (
    <div className="carrito-fondo">
      <h1>Tu Carrito de compras</h1>
      {cart.length > 0 ? (
        <>
        {cart.map((item, index) => (
          <article key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Descripcion: {item.description}</p>
            <button onClick={()=> removeItem(item.id)}>Sacar del carrito</button>
          </article>
        ))}
        <button onClick={handleCheckout}>Comprar</button>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
}

