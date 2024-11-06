import React, { useState } from 'react';
import './Basket_items.css';
import { removeItem } from '../../slices/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Basket_items = () => {
    const dispatch = useDispatch();
    const busketItems = useSelector((state) => state.basket.basketItems)

    const removeFromBasket = (product) => {
        dispatch(removeItem(product))
    }

    const { t } = useTranslation();

    return (
        <>
            {busketItems.length === 0 ? (
                <div className="error">
                    <p>{t("no_items")}</p>
                    <p><Link className="link_back" to="/catalog">{t("go_to_catalog")}</Link></p>
                </div>
            ) : (
                <div className="cart">
                    {busketItems.map(item => (
                        <div key={item.id} className="cart_product">
                            <div className="cart_img">
                                <img src={require(`../../images/${item.img}`)} alt={`Product ${item.title}`} />
                            </div>
                            <div className="cart_title">{item.title}</div>
                            <div className="cart_block-btns">
                                {/* <Typography gutterBottom>Количество: {quantities[item.id]}</Typography>
                                <Slider
                                    value={quantities[item.id]}
                                    //onChange={(event, newValue) => handleQuantityChange(item.id, newValue)}
                                    aria-labelledby="quantity-slider"
                                    min={1}
                                    max={100}
                                    valueLabelDisplay="auto"
                                    color='primary'
                                /> */}
                            </div>
                            <div className="cart_price">
                                {/* <span className="cart_total_price">{(item.price * quantities[item.id]).toFixed(2)}</span> */}
                                <span className="cart_total_price">{item.price}</span>
                            </div>
                            <div onClick={() => removeFromBasket(item)} className="cart_del-card">X</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Basket_items;