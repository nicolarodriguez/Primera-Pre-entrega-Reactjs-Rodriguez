import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {
    const {cart, setCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleCartClick = ()=>{
        navigate('/cart');
    }
    return(
        <>
        <button onClick={handleCartClick} className="navbar-cart">
            🛒{cart.length > 0 ? cart.length : '0'}
        </button>
        </>
    )
}