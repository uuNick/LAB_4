import React from 'react';
import './Catalog_cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortOrder } from '../../slices/productsSlice';
import { addItem, removeItem } from '../../slices/basketSlice';
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Catalog_cards = () => {

    const dispatch = useDispatch();
    const { products, category, sortOrder, searchQuery } = useSelector((state) => state.products);
    const busketItems = useSelector((state) => state.basket.basketItems)
    const { t } = useTranslation();

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
                            <FormLabel>{t("categ")}</FormLabel>
                            <RadioGroup
                                value={category}
                                name="products_group"
                                onChange={(e) => dispatch(setCategory(e.target.value))}
                            >
                                <FormControlLabel value="" control={<Radio />} label={t("all")} />
                                <FormControlLabel value="burger" control={<Radio />} label={t("burgers")} />
                                <FormControlLabel value="pizza" control={<Radio />} label={t("pizzas")} />
                                <FormControlLabel value="drink" control={<Radio />} label={t("drinks")} />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>{t("on_price")}</FormLabel>
                            <RadioGroup
                                value={sortOrder}
                                name="products_price"
                                onChange={(e) => dispatch(setSortOrder(e.target.value))}
                            >
                                <FormControlLabel value="none" control={<Radio />} label={t("def")} />
                                <FormControlLabel value="asc" control={<Radio />} label={t("cheap_ones_first")} />
                                <FormControlLabel value="desc" control={<Radio />} label={t("dear_ones_first")} />
                            </RadioGroup>
                        </FormControl>
                    </>
                )}
            </div>
            <div className="cards">
                {sortedProducts.length === 0 ?
                    (<p className="no_products">{t("no_prod_in_catalog")}</p>) :
                    (sortedProducts.map(item => (
                        <div key={item.id} className="card">
                            <div className="card_top">
                                <a className="card_image">
                                    <img src={require(`../../images/${item.img}`)} alt={`Card ${item.id}`} />
                                </a>
                            </div>
                            <div className="card_bottom">
                                <div className="card_prices">
                                    <div className="card_price card_price--common"><span className="text_price">{t("price")}</span>{item.price}</div>
                                </div>
                                <a className="card_title">{t(`product_${item.id}`)}</a>
                                <Button variant="outlined" color='primary.contrastText' sx={{ padding: '10px 20px', margin: '0', marginTop: 'auto' }} onClick={() => {
                                    isInBasket(item.id) ? removeFromBasket(item) : addToBasket(item);
                                }}
                                >
                                    {isInBasket(item.id) ? t("delete_from_busket") : t("add_in_busket")}
                                </Button>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    )
};

export default Catalog_cards;
