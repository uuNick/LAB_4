import React from 'react';
import './Catalog_cards.css';
import data from '../../data/products.json'

const Catalog_cards = () => {
    return (
        <div className="wrapper">
            <div className="cards">
                {data.map(item => (
                    <div key={item.id} className="card">
                        <div className="card_top">
                            <a className="card_image">
                                <img src={require(`../../images/${item.img}`)} alt={`Card ${item.id}`} />
                            </a>
                        </div>
                        <div className="card_bottom">
                            <div className="card_prices">
                                <div className="card_price card_price--common"><span className="text_price">Цена</span>{item.price}</div>
                            </div>
                            <a className="card_title">{item.title}</a>
                            <button className="card_add">В корзину</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="numeration">
                <button type="button" className="btn_num btn_first_items">«</button>
                <button type="button" className="btn_num previous_items">&lt;</button>
                <span className="number_num">1</span>
                <button type="button" className="btn_num btn_next_items">&gt;</button>
                <button type="button" className="btn_num btn_last_items">»</button>
            </div> */}
        </div>
    )
};

export default Catalog_cards;
