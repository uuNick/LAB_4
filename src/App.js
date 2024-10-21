import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Discounts from './pages/Discounts';
import Main from './pages/Main';
import Basket from './pages/Basket';

function App() {

  const [BasketItems, setBasketItems] = useState([]);

  const addToBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]);
  };

  const removeFromBasket = (id) => {
    setBasketItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog addToBasket={addToBasket} removeFromBasket={removeFromBasket} BasketItems={BasketItems} />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/basket" element={<Basket BasketItems={BasketItems} removeFromBasket={removeFromBasket}/>} />
      </Routes>
    </Router>
  );
}

export default App;
