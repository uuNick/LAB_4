import React from 'react';
import './Catalog_cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortOrder } from '../../slices/productsSlice';
import { addItem, removeItem } from '../../slices/basketSlice';
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const Catalog_cards = () => {

    const dispatch = useDispatch();
    const { products, category, sortOrder, searchQuery } = useSelector((state) => state.products);
    const busketItems = useSelector((state) => state.basket.basketItems)

    const addToBasket = (product) => {
        dispatch(addItem(product));
    };

    const removeFromBasket = (product) => {
        dispatch(removeItem(product))
    }

    const isInBasket = (id) => busketItems.some(item => item.id === id);

    const filteredItemsOnTitle = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery?.toLowerCase() || ''));

    const showFilters = filteredItemsOnTitle.length >= 3;

    const filteredProducts = filteredItemsOnTitle.filter((product) => {
        return category === '' || product.type === category;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);

        if (sortOrder === 'asc') {
            return priceA - priceB;
        } else if (sortOrder === 'desc') {
            return priceB - priceA;
        } else {
            return 0;
        }
    });

    return (
        <div className="wrapper">
            <div className="filter_product_category">
                {showFilters && (
                    <>
                        <FormControl>
                            <FormLabel>Категории</FormLabel>
                            <RadioGroup
                                value={category}
                                name="products_group"
                                onChange={(e) => dispatch(setCategory(e.target.value))}
                            >
                                <FormControlLabel value="" control={<Radio />} label="Все" />
                                <FormControlLabel value="burger" control={<Radio />} label="Бургеры" />
                                <FormControlLabel value="pizza" control={<Radio />} label="Пиццы" />
                                <FormControlLabel value="drink" control={<Radio />} label="Напитки" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>По цене</FormLabel>
                            <RadioGroup
                                value={sortOrder}
                                name="products_price"
                                onChange={(e) => dispatch(setSortOrder(e.target.value))}
                            >
                                <FormControlLabel value="none" control={<Radio />} label="По умолчанию" />
                                <FormControlLabel value="asc" control={<Radio />} label="Сначала дешёвые" />
                                <FormControlLabel value="desc" control={<Radio />} label="Сначала дорогие" />
                            </RadioGroup>
                        </FormControl>
                    </>
                )}
            </div>
            <div className="cards">
                {sortedProducts.length === 0 ?
                    (<p className="no_products">Нет продуктов, соответствующих вашим критериям.</p>) :
                    (sortedProducts.map(item => (
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
                                <Button variant="outlined" color='primary.contrastText' sx={{ padding: '10px 20px', margin: '0', marginTop: 'auto' }} onClick={() => {
                                    isInBasket(item.id) ? removeFromBasket(item) : addToBasket(item);
                                }}
                                >
                                    {isInBasket(item.id) ? 'Удалить из корзины' : 'В корзину'}
                                </Button>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    )
};

export default Catalog_cards;
