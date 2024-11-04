import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import CreateProductCard from './pages/CreateProductCard';
import Main from './pages/Main';
import Basket from './pages/Basket';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/create_product_card" element={<CreateProductCard />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
