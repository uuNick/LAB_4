import React from 'react';
import Popup from 'reactjs-popup';
import Logo from '../../images/logo/logo.svg';
import data from '../../data/contact_icons.json'
import './About_popup.css'
import 'reactjs-popup/dist/index.css';
import Button from '@mui/material/Button';

const About_popup = () => {
    return (
        <Popup
            trigger={<p className="item_in_footer"><a className="link_item_in_footer">О нас</a></p>}
            modal
            closeOnDocumentClick
        >
            {close => (
                <div className="modal">
                    <img className="logo_in_modal" src={Logo} alt="Deliver X logo icon" />
                    <p className="info_after_logo">Сервис доставки еды</p>
                    <p className="common_inf">Deliver X — это современный сервис доставки еды, который предлагает удобное и быстрое решение для заказа блюд из любимых ресторанов прямо к вашему порогу. Мы стремимся сделать процесс заказа еды максимально простым и приятным, обеспечивая высокое качество обслуживания и широкий выбор блюд.</p>
                    <p className="contact_info">Мы в социальных сетях</p>
                    <div className="contact_icons">
                        {data.map(item => (
                            <a href='#' key = {item.id}><img className='icon' src = {require(`../../images/${item.img}`)} alt = {`Contact icon ${item.id}`}/></a>
                        ))}
                    </div>
                    <Button variant='outlined' color='primary.contrastText' onClick={close}>
                        Закрыть
                    </Button>
                </div>
            )}
        </Popup>
    );
};

export default About_popup;