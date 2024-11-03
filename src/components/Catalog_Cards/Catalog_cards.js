import React, { useState } from 'react';
import './Catalog_cards.css';
import data from '../../data/products.json'
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../slices/productsSlice';
import { addItem, removeItem } from '../../slices/basketSlice';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Catalog_cards = ({ searchValue, sortOrder, setSortOrder }) => {

    const dispatch = useDispatch();
    const { products, filters } = useSelector((state) => state.products);
    const busketItems = useSelector((state) => state.basket.basketItems)
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    const addToBasket = (product) => {
        dispatch(addItem(product));
    };

    const removeFromBasket = (product) => {
        dispatch(removeItem(product))
    }

    // const filterChange = (e) => {
    //     const { name, value } = e.target;
    //     dispatch(setFilters({ ...filters, [name]: value }));
    // };

    // const filteredProducts = products.filter((product) => {
    //     if (filters.type !== 'all' && product.type !== filters.type) return false;
    //     // if (filters.price && product.price > filters.price) return false;
    //     return true;
    // });

    const isInBasket = (id) => busketItems.some(item => item.id === id);
    // const filteredItemsOnTitle = data.filter(item =>
    //     item.title.toLowerCase().includes(searchValue?.toLowerCase() || ''));

    // const filteredItemsOnType = filterType
    //     ? filteredItemsOnTitle.filter(item => item.type === filterType)
    //     : filteredItemsOnTitle;

    // const sortedProducts = [...filteredItemsOnType].sort((a, b) => {
    //     console.log(sortOrder)
    //     const priceA = parseFloat(a.price); // Преобразование строки в число
    //     const priceB = parseFloat(b.price); // Преобразование строки в число

    //     if (sortOrder == "asc") {
    //         return priceA - priceB;
    //     } else if (sortOrder == "desc") {
    //         return priceB - priceA;
    //     }
    //     return 0;
    // });

    return (
        <div className="wrapper">
            <div className="filter_product_category">
                <FormControl>
                    <FormLabel>Категории</FormLabel>
                    <RadioGroup
                        defaultValue=""
                        name="products_group"
                    //onChange={setFilterType}
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
                        defaultValue="none"
                        name="products_price"
                    //onChange={setSortOrder}
                    >
                        <FormControlLabel value="none" control={<Radio />} label="По умолчанию" />
                        <FormControlLabel value="asc" control={<Radio />} label="Сначала дешёвые" />
                        <FormControlLabel value="desc" control={<Radio />} label="Сначала дорогие" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="cards">
                {products.map(item => (
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
                                console.log(busketItems);
                            }}
                            >
                                {isInBasket(item.id) ? 'Удалить из корзины' : 'В корзину'}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Catalog_cards;
