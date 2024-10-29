import React, { useState } from 'react';
import './Basket_items.css';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const Basket_items = ({ BasketItems, removeFromBasket, handleQuantityChange, quantities}) => {

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
                            <div className="cart_block-btns">
                                <Typography gutterBottom>Количество: {quantities[item.id]}</Typography>
                                <Slider
                                    value={quantities[item.id]}
                                    onChange={(event, newValue) => handleQuantityChange(item.id, newValue)}
                                    aria-labelledby="quantity-slider"
                                    min={1}
                                    max={100}
                                    valueLabelDisplay="auto"
                                    color='primary'
                                />
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