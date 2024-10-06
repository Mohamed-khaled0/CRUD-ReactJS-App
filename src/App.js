// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />  
            <Route path="/add" element={<AddProduct />} />
            <Route path="/add/:productID" element={<AddProduct />} /> {/* For editing */}
            <Route path="/products/:productID" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
