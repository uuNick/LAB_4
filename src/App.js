import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Discounts from './pages/Discounts';
import Main from './pages/Main';
import Basket from './pages/Basket';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
