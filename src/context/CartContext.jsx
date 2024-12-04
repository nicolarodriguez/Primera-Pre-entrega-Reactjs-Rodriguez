import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children}){
    const [cart, setCart] = useState(()=>{
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }), [cart];

    const addItem = (product) => {
        setCart((prevCart) =>{
            const existingProduct = prevCart.find(item => item.id === product.id);
            if(existingProduct){
                return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + product.quantity} : item);
            }
            return [...prevCart, {...product, quantity: product.quantity}];
        });
    };

    const removeItem = (productId)=>{
        setCart((prevCart)=>{
            return prevCart.filter(item => item.id !== productId);
        });
    }

    const clearCart = () =>{
        setCart([]);
    }

    return(
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);