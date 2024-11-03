import React, { useState } from 'react';
import Catalog_header from '../components/Catalog_Header/Catalog_header';
import Catalog_cards from '../components/Catalog_Cards/Catalog_cards';

const Catalog = ({ addToBasket, removeFromBasket, BasketItems }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterType, setFilterType] = useState('');
  const [sortOrder, setSortOrder] = useState('none');

  const setType = (event) => {
    setFilterType(event.target.value);
  };

  const setPrice = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <Catalog_header BasketCount = {BasketItems.length} setSearchValue={setSearchValue}/>
      <Catalog_cards 
        addToBasket={addToBasket} 
        removeFromBasket={removeFromBasket} 
        BasketItems={BasketItems} 
        searchValue={searchValue} 
        setFilterType={setType} 
        filterType={filterType}
        setSortOrder={setPrice}
        sortOrder={sortOrder}/> 
    </>
  )
};

export default Catalog;
