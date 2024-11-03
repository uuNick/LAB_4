import React from 'react';
import './Catalog_header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import data from '../../data/products.json'

const Catalog_header = ({setSearchValue}) => {

    const totalCount = useSelector((state) => state.basket.totalCount);

    const setNewValue = (event, newValue) => {
        setSearchValue(newValue);
      };

    const cardTitles = data.map(card => card.title);
    return (
        <header>
            <div className="header_wrapper_c">
                <div className="drop_down">
                    <button className="drop_button">Каталог</button>
                </div>
                <div className="input-wrapper">
                    <div className="input-group">
                        <Autocomplete
                            disablePortal
                            options={cardTitles}
                            onChange={setNewValue}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Поиск продуктов" />}
                        />
                    </div>
                </div>
                <div className="header_icons">
                    <div className="basket_inner">
                        <Link to="/basket">
                            <ShoppingCartIcon color="secondary" sx={{fontSize:"5em"}}></ShoppingCartIcon>
                            <span className="basket_count">{totalCount}</span>
                        </Link>
                    </div>
                    <Link to="/">
                        <HomeIcon color="secondary" sx={{fontSize:"5em"}}/>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Catalog_header;
