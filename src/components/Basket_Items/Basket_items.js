import React, { useState } from 'react';
import './Basket_items.css';
import { Link } from 'react-router-dom';


const Basket_items = ({ BasketItems, removeFromBasket }) => {
    const [quantities, setQuantities] = useState(
        BasketItems.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const handleIncrease = (id) => {
        setQuantities((prev) => {
            const newQuantity = Math.min(prev[id] + 1, 100);
            return { ...prev, [id]: newQuantity };
        });
    };


    const handleDecrease = (id) => {
        setQuantities((prev) => {
            const newQuantity = Math.max(prev[id] - 1, 1);
            return { ...prev, [id]: newQuantity };
        });
    };

    // function Counter() {
    //     const [quantities1, setQuantities1] = useState(1)
    //     return (
    //         <div className="cart_block-btns">
    //             <button onClick={() => setQuantities1(quantities1 - 1)}>-</button>
    //             <input type="number" className="cart_count" value={quantities1} />
    //             <button onClick={() => setQuantities1(quantities1 + 1)}>+</button>
    //         </div>
    //     )
    // }

    return (
        <>
            {BasketItems.length === 0 ? (
                <div className="error">
                    <p>В корзине нет товаров!</p>
                    <p><Link className="link_back" to="/catalog">Перейти к списку товаров!</Link></p>
                </div>
            ) : (
                <div className="cart">
                    {BasketItems.map(item => (
                        <div key={item.id} className="cart_product">
                            <div className="cart_img">
                                <img src={require(`../../images/${item.img}`)} alt={`Product ${item.title}`} />
                            </div>
                            <div className="cart_title">{item.title}</div>
                            {/* <Counter></Counter> */}
                            <div className="cart_block-btns">
                                <button onClick={() => handleDecrease(item.id)}>-</button>
                                <input readOnly type="number" className="cart_count" value = {quantities[item.id]}/>
                                    <button onClick={() => handleIncrease(item.id)}>+</button>
                            </div>
                            <div className="cart_price">
                                <span className="cart_total_price">{(item.price * quantities[item.id]).toFixed(2)}</span>р
                            </div>
                            <div onClick={() => removeFromBasket(item.id)} className="cart_del-card">X</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Basket_items;