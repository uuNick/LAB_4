import React, {useState} from 'react';
import Basket_header from '../components/Basket_Header/Basket_header';
import Basket_items from '../components/Basket_Items/Basket_items';
import Basket_order from '../components/Basket_Order/Basket_order';

const Basket = ({ BasketItems, removeFromBasket }) => {
    const [quantities, setQuantities] = useState(
        BasketItems.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, newQuantity) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: newQuantity,
        }));
    };
    return (
        <>
            <Basket_header BasketCount = {BasketItems.length}/>
            <Basket_items BasketItems={BasketItems} removeFromBasket={removeFromBasket} handleQuantityChange={handleQuantityChange} quantities={quantities}/>
            <Basket_order BasketItems={BasketItems} quantities={quantities}/>
        </>
    );
};

export default Basket;