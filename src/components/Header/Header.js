import React from 'react';
import Logo from '../../images/logo/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

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
                                    <Link to={link.path} className="menu_link">{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header_buttons">
                        <Button variant='outlined' color='primary.contrastText'>Войти</Button>
                        <Button variant='outlined' color='primary.contrastText' sx = {{padding: '1em 1.5em', margin: '0 0.2em'}}>Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;