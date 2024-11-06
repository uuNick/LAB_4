import React, { useState } from 'react';
import Logo from '../../images/logo/logo.svg'
import data from '../../data/cities.json'
import { Link, useNavigate } from 'react-router-dom';
import About_popup from '../About_Popup/About_popup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Footer.css';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Footer = ({ main_pages_links, additional_pages_links }) => {
    const firstTwo = data.slice(0, 2);
    const lastTwo = data.slice(-2);
    const [isEnglish, setIsEnglish] = useState(true);

    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate('/catalog');
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const handleLanguageChange = () => {
        setIsEnglish(!isEnglish);
        i18n.changeLanguage(isEnglish ? 'rus' : 'en');
    };

    return (
        <footer>
            <div className="div_deliver_x_dowload">
                <div className="logo_deliver_x_with_description">
                    <a href="#" className="logo_in_deliver_x">
                        <img src={Logo} alt='Logo' />
                    </a>
                    <p className="discript_deliver_x">{t("footer_desc")}</p>
                </div>
                <div className="rectangle_with_buttons_in_deliver_x">
                    <Button variant="outlined" color='primary.contrastText' onClick={goToCatalog}>{t("catalog")}</Button>
                </div>
            </div>
            <div className="horisontal_line">
            </div>
            <div className="main_div_footer">
                <div className="footer_menu">
                    <h4 className="h4_item_in_footer" onClick={handleClick}>{t("menu")}</h4>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {main_pages_links.map((link, index) => (
                            <MenuItem key={index} onClick={handleClose}>
                                <Link to={link.path} className="link_item_in_footer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {link.text}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="utility_pages_footer">
                    <h4 className="h4_item_in_footer">{t("ut_pages")}</h4>
                    {additional_pages_links.map((link, index) => (
                        <p key={index} className="item_in_footer"><a className="link_item_in_footer" target="_blank" href={link.href}>{link.text}</a></p>
                    ))}
                    <About_popup />
                    <Button variant="outlined" color='primary.contrastText' onClick={handleLanguageChange}>{t("change_lang")}</Button>
                </div>
                <div className="available_in_footer flex align-center">
                    <h4 className="h4_item_in_footer">{t("av_in")}</h4>
                    <div className="icons_available_in_1">
                        {firstTwo.map(item => (
                            <div key={item.id} className="one_icon_div_in_footer">
                                <img className="photo_icon_city_in_footer" src={require(`../../images/${item.img}`)} alt={`City ${item.title}`} />
                                <p className="icon_names_in_footer">{t(`city_${item.id}`)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="icons_available_in_2">
                        {lastTwo.map(item => (
                            <div key={item.id} className="one_icon_div_in_footer">
                                <img className="photo_icon_city_in_footer" src={require(`../../images/${item.img}`)} alt={`City ${item.title}`} />
                                <p className="icon_names_in_footer">{t(`city_${item.id}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="horisontal_line">
            </div>
            <div className="end_info">
                <p>
                    <span className="black_name_in_footer">{t("copyright")}</span>
                    <span className="red_name_in_footer">uuNick</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;