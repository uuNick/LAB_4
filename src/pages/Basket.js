import React from 'react';
import Basket_header from '../components/Basket_Header/Basket_header';
import Basket_items from '../components/Basket_Items/Basket_items';
import Basket_order from '../components/Basket_Order/Basket_order';

const Basket = () => {
    return (
        <>
            <Basket_header />
            <Basket_items />
            <Basket_order />
        </>
    );
};

export default Basket;