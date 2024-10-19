import React from 'react';
import Logo from '../../images/logo/logo.svg';
import './Header.css';

const Header = ({ links }) => {
    return (
        <header>
            <div className="header_wrapper flex align-center justify-content-space-between">
                <div id="logo">
                    <a href="#">
                        <img src={Logo} alt='Logo' />
                    </a>
                </div>
                <div className="menu">
                    <nav className='body_menu'>
                        <ul className="menu_list">
                            {links.map((link, index) => (
                                <li className='menu_item' key={index}>
                                    <a className="menu_link" href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header_buttons">
                        <button className="authorization_button">Войти</button>
                        <button className="register_button">Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;