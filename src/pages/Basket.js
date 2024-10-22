import React from 'react';
import Basket_header from '../components/Basket_Header/Basket_header';
import Basket_items from '../components/Basket_Items/Basket_items';

const Basket = ({ BasketItems, removeFromBasket }) => {
    return (
        <>
            <Basket_header BasketCount = {BasketItems.length}/>
            <Basket_items BasketItems={BasketItems} removeFromBasket={removeFromBasket}></Basket_items>
        </>
    );
};

export default Basket;