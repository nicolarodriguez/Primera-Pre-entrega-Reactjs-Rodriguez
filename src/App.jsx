import React from 'react'
import NavBarComponent from './components/NavBarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductContainer from './components/ProductContainer';
import CategoryPage from './components/CategoryPageComponent';
import ProductDetail from './components/ProductDetail';
import CartCard from './components/CartCard';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';

function App(){
  return(
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path="/" element={<ProductContainer/>}/>
          <Route path="/product/:prodId" element={<ProductDetail/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
          <Route path="/cart" element={<CartCard/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App