import React from 'react';
import './Catalog_header.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import data from '../../data/products.json'

const Catalog_header = ({ BasketCount, setSearchValue }) => {
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
                            <svg width="38" height="38" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M.75-.02a.75.75 0 100 1.5l.408-.006 1.606 1.281 1.839 6.881L4.237 12a2 2 0 102.188 2.722l5.705.028a2 2 0 100-1.5l-5.705-.028a2.007 2.007 0 00-.722-.898l.438-2.632 7.933.027 1.91-7.715H4.227L1.683-.026 1.68-.02v-.005L.75-.02z" fill="#000"></path>
                            </svg>
                            <span className="basket_count">{BasketCount}</span>
                        </Link>
                    </div>
                    <Link to="/">
                        <svg className="home_icon" width="45" height="45" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.98 1.984l7 6h-2.003v6H9.96V10.97H5.997v3.016H2.982v-6H.979l7-6z" fill="#000"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Catalog_header;
