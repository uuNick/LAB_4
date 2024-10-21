import React, { useState } from 'react';
import Catalog_header from '../components/Catalog_Header/Catalog_header';
import Catalog_cards from '../components/Catalog_Cards/Catalog_cards';

const Catalog = ({ addToBasket, removeFromBasket, BasketItems }) => {
  return (
    <>
      <Catalog_header BasketCount = {BasketItems.length}/>
      <Catalog_cards addToBasket={addToBasket} removeFromBasket={removeFromBasket} BasketItems={BasketItems}/>
    </>
  )
};

export default Catalog;
