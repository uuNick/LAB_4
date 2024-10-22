import React from 'react';
import './Main_section.css';
import data from '../../data/cards.json'
import { useNavigate } from 'react-router-dom';

const Main_section = () => {

    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate('/catalog');
    };

    return (
        <section className="section_about">
            <div className="about_delivery">
                <p className="text_before_main_discript text_how_it_works">Сервис доставки еды</p>
                <p className="text_main_discript text_our_smile">Наш простой, но эффективный</p>
                <p className="text_after_main_discript text_lorem_ispum">Наш оптимизированный процесс доставки гарантирует, что ваш заказ будет доставлен вам быстро и удобно</p>
            </div>
            <div className="steps flex justify-content-space-between">
                {data.map(item => (
                    <div key = {item.id} className="div_in_step">
                        <img className="picture_steps" src = {require(`../../images/${item.img}`)} alt = {`Card ${item.id}`}/>
                        <p className="text_in_steps" >{item.title}</p>
                        <p className="text_after_main_text_in_steps">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="rectangle_with_buttons_in_steps flex">
                <button onClick={goToCatalog} className="button_dowload_app">Каталог</button>
            </div>
            <div className="horisontal_line">
            </div>
        </section>
    );
};

export default Main_section;