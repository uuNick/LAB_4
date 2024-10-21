import React from 'react';
import './Catalog_header.css';
import { Link } from 'react-router-dom';

const Catalog_header = ({ BasketCount }) => {
    return (
        <header>
            <div className="header_wrapper">
                <div className="drop_down">
                    <button className="drop_button">Каталог</button>
                </div>
                <div className="input-wrapper">
                    <div className="input-group">
                        <input type="text" placeholder="Введите текст" className="input-field" />
                        <button className="submit-button"><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </g>
                        </svg>
                        </button>
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
