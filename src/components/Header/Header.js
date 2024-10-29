import React, { useState } from 'react';
import Logo from '../../images/logo/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Header = ({ links }) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {links.map((link, index) => (
                    <ListItem key={index} sx={{ justifyContent: "center" }}>
                        <Link to={link.path} className="menu_link">{link.text}</Link>
                    </ListItem>
                ))}
                <ListItem sx={{ justifyContent: "center" }}>
                    <Button variant='outlined' color='primary.contrastText'>Войти</Button>
                </ListItem>
                <ListItem sx={{ justifyContent: "center" }}>
                    <Button variant='outlined' color='primary.contrastText' sx={{ padding: '1em 1.5em', margin: '0 0.2em' }}>Зарегистрироваться</Button>
                </ListItem>
            </List>

        </Box>
    );
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
                        <Button variant='outlined' color='primary.contrastText' sx={{ padding: '1em 1.5em', margin: '0 0.2em' }}>Зарегистрироваться</Button>
                    </div>
                </div>
                <div className='burger_menu'>
                    <Button onClick={toggleDrawer(true)} variant='outlined' color='primary.contrastText'>Меню</Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
            </div>
        </header>
    );
};

export default Header;