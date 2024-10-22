import React from 'react';
import Logo from '../../images/logo/logo.svg'
import data from '../../data/cities.json'
import { Link, useNavigate } from 'react-router-dom';
import About_popup from '../About_Popup/About_popup';
import './Footer.css';

const Footer = ({ main_pages_links, additional_pages_links }) => {
    const firstTwo = data.slice(0, 2);
    const lastTwo = data.slice(-2);

    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate('/catalog');
    };

    return (
        <footer>
            <div className="div_deliver_x_dowload">
                <div className="logo_deliver_x_with_description">
                    <a href="#" className="logo_in_deliver_x">
                        <img src={Logo} alt='Logo' />
                    </a>
                    <p className="discript_deliver_x">В Delivery X мы гордимся тем, что предоставляем бесперебойную и эффективную логистику предприятиям любого размера.</p>
                </div>
                <div className="rectangle_with_buttons_in_deliver_x">
                    <button onClick={goToCatalog} className="button_dowload_for_ios">Каталог</button>
                </div>
            </div>
            <div className="horisontal_line">
            </div>
            <div className="main_div_footer">
                <div className="footer_menu">
                    <h4 className="h4_item_in_footer">Меню</h4>
                    {main_pages_links.map((link, index) => (
                        <p key={index} className="item_in_footer"><Link to={link.path} className="link_item_in_footer" >{link.text}</Link></p>
                    ))}
                    <About_popup/>
                </div>
                <div className="utility_pages_footer">
                    <h4 className="h4_item_in_footer">Полезные страницы</h4>
                    {additional_pages_links.map((link, index) => (
                        <p key={index} className="item_in_footer"><a className="link_item_in_footer" target="_blank" href={link.href}>{link.text}</a></p>
                    ))}
                </div>
                <div className="available_in_footer flex align-center">
                    <h4 className="h4_item_in_footer">Доступно в</h4>
                    <div className="icons_available_in_1">
                        {firstTwo.map(item => (
                            <div key = {item.id} className="one_icon_div_in_footer">
                                <img className="photo_icon_city_in_footer" src={require(`../../images/${item.img}`)} alt={`City ${item.title}`} />
                                <p className="icon_names_in_footer">{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="icons_available_in_2">
                        {lastTwo.map(item => (
                            <div key = {item.id} className="one_icon_div_in_footer">
                                <img className="photo_icon_city_in_footer" src={require(`../../images/${item.img}`)} alt={`City ${item.title}`} />
                                <p className="icon_names_in_footer">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="horisontal_line">
            </div>
            <div className="end_info">
                <p>
                    <span className="black_name_in_footer">Авторское право © Deliver X | Разработано</span>
                    <span className="red_name_in_footer">uuNick</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;