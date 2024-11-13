import React from 'react'
import NavBarComponent from './components/NavBarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductContainer from './components/ProductContainer';
import CategoryPage from './components/CategoryPageComponent';
import ProductDetail from './components/ProductDetail';

function App(){
  return(
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path="/" element={<ProductContainer/>}/>
          <Route path="/product/:prodId" element={<ProductDetail/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App