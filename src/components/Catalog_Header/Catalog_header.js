import React from 'react';
import './Catalog_header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../slices/productsSlice';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import data from '../../data/products.json'
import { useTranslation } from 'react-i18next';

const Catalog_header = () => {
    const dispatch = useDispatch();

    const totalCount = useSelector((state) => state.basket.totalCount);
    const cardTitles = data.map(card => card.title);
    const { t } = useTranslation();

    const setSearchValue = (event, newValue) => {
        dispatch(setSearchQuery(newValue || ''));
    };

    return (
        <header>
            <div className="header_wrapper_c">
                <div className="drop_down">
                    <button className="drop_button">{t("catalog")}</button>
                </div>
                <div className="input-wrapper">
                    <div className="input-group">
                        <Autocomplete
                            disablePortal
                            options={cardTitles}
                            onChange={setSearchValue}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={t("search")} />}
                        />
                    </div>
                </div>
                <div className="header_icons">
                    <div className="basket_inner">
                        <Link to="/basket">
                            <ShoppingCartIcon color="secondary" sx={{ fontSize: "5em" }}></ShoppingCartIcon>
                            <span className="basket_count">{totalCount}</span>
                        </Link>
                    </div>
                    <Link to="/">
                        <HomeIcon color="secondary" sx={{ fontSize: "5em" }} />
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Catalog_header;
