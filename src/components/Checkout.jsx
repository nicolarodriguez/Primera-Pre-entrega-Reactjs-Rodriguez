import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart} = useCart();
    const [shippingInfo, setShippingInfo] = useState({name: '', adress: '', method: ''});
    const [message, setMessage] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({...shippingInfo, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Gracias por tu compra!')
        clearCart();
        setIsConfirmed(true);
        setTimeout(()=>{
            navigate('/');
        }, 2000);
    }

    const calcularTotal = () =>{
        return cart.reduce((acc, item)=> acc + item.price * item.quantity, 0);
    }

    const precioTotal = calcularTotal();

    return (
        <div>
            <h1>Checkout</h1>
            {cart.length === 0 ? (
                <p>Tu carrito ahora está vacío.</p>
            ) : (
                <div>
                    <h2>Productos en el carrito:</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.title} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${precioTotal}</h3>
                    <form onSubmit={handleSubmit}>
                        <h3>Información de Envío</h3>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre" 
                            value={shippingInfo.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Dirección" 
                            value={shippingInfo.address} 
                            onChange={handleChange} 
                            required 
                        />
                        <h3>Introducir método de Pago</h3>
                        <input 
                            type="text" 
                            name="paymentMethod" 
                            placeholder="Método de Pago" 
                            value={shippingInfo.paymentMethod} 
                            onChange={handleChange} 
                            required 
                        />
                        <button type="submit">Confirmar Compra</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            )}
            {isConfirmed && <p>Compra confirmada con éxito.</p>}
        </div>
    );
}

export default Checkout;