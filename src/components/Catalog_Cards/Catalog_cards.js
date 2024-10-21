import React, { useState } from 'react';
import './Catalog_cards.css';
import data from '../../data/products.json'

const Catalog_cards = ({ addToBasket, removeFromBasket, BasketItems }) => {
    const isInBasket = (id) => BasketItems.some(item => item.id === id);


    return (
        <div className="wrapper">
            <div className="cards">
                {data.map(item => (
                    <div key={item.id} className="card">
                        <div className="card_top">
                            <a className="card_image">
                                <img src={require(`../../images/${item.img}`)} alt={`Card ${item.id}`} />
                            </a>
                        </div>
                        <div className="card_bottom">
                            <div className="card_prices">
                                <div className="card_price card_price--common"><span className="text_price">Цена</span>{item.price}</div>
                            </div>
                            <a className="card_title">{item.title}</a>
                            <button className="card_add" onClick={() => {
                                isInBasket(item.id) ? removeFromBasket(item.id) : addToBasket(item);
                            }}
                            >
                                {isInBasket(item.id) ? 'Удалить из корзины' : 'В корзину'}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Catalog_cards;
