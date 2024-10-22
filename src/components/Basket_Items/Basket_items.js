import React from 'react';
import './Basket_items.css';
import { Link } from 'react-router-dom';


const Basket_items = ({ BasketItems, removeFromBasket }) => {
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
                        <div key = {item.id} className="cart_product">
                            <div className="cart_img">
                                <img src = {require(`../../images/${item.img}`)} alt = {`Product ${item.title}`}/>
                            </div>
                            <div className="cart_title">{item.title}</div>
                            <div className="cart_block-btns">
                                <button className="cart_minus">-</button>
                                <input type="number" className="cart_count" value="1" min="1" max="99"/>
                                    <button className="cart_plus">+</button>
                            </div>
                            <div className="cart_price">
                                <span className="cart_total_price">{item.price}</span>р
                            </div>
                            <div className="cart_del-card">X</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Basket_items;