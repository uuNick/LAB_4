import React from 'react';
import './Basket_header.css';
import { Link } from 'react-router-dom';

const Basket_header = ({BasketCount}) => {
    return (
        <div className="wrapper_h">
            <h1>Корзина</h1>
            <div className="header_icons">
                <div className="basket_inner">
                    <svg width="38" height="38" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.75-.02a.75.75 0 100 1.5l.408-.006 1.606 1.281 1.839 6.881L4.237 12a2 2 0 102.188 2.722l5.705.028a2 2 0 100-1.5l-5.705-.028a2.007 2.007 0 00-.722-.898l.438-2.632 7.933.027 1.91-7.715H4.227L1.683-.026 1.68-.02v-.005L.75-.02z" fill="#000"></path>
                    </svg>
                    <span className="basket_count">{BasketCount}</span>
                </div>
                <Link to="/catalog">
                    <svg className="go_back_icon" width="38" height="38" viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g id="Dribbble-Light-Preview" transform="translate(-104.000000, -3805.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M59.9990013,3645.86816 L59.9990013,3652.13116 C59.9990013,3652.84516 58.8540013,3653.25316 58.2180013,3652.82516 L53.9990013,3650.14016 L53.9990013,3652.13116 C53.9990013,3652.84516 53.4260013,3653.25316 52.7900013,3652.82516 L48.4790013,3649.69316 C47.9650013,3649.34616 47.7980013,3648.65316 48.3120013,3648.30616 L52.7900013,3645.17516 C53.4260013,3644.74616 53.9990013,3645.15416 53.9990013,3645.86816 L53.9990013,3647.85916 L58.2180013,3645.17516 C58.8540013,3644.74616 59.9990013,3645.15416 59.9990013,3645.86816">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    )
};

export default Basket_header;
