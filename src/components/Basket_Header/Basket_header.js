import React from 'react';
import './Basket_header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Basket_header = () => {
    const totalCount = useSelector((state) => state.basket.totalCount);
    return (
        <div className="wrapper_h">
            <h1>Корзина</h1>
            <div className="header_icons">
                <div className="basket_inner">
                    <ShoppingCartIcon color="secondary" sx={{ fontSize: "5em" }}></ShoppingCartIcon>
                    <span className="basket_count">{totalCount}</span>
                </div>
                <Link to="/catalog">
                    <ArrowBackIcon color='secondary' fontSize='large' />
                </Link>
            </div>
        </div>
    )
};

export default Basket_header;
