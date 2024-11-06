import React from 'react';
import './Main_section.css';
import data from '../../data/cards.json'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';


const Main_section = () => {

    const { products } = useSelector((state) => state.products);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToCatalog = () => {
        console.log(products)
        navigate('/catalog');
    };

    return (
        <section className="section_about">
            <div className="about_delivery">
                <p className="text_before_main_discript text_how_it_works">{t("service")}</p>
                <p className="text_main_discript text_our_smile">{t("simple")}</p>
                <p className="text_after_main_discript text_lorem_ispum">{t("opt_del")}</p>
            </div>
            <div className="steps">
                {data.map(item => (
                    <Card key = {item.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={require(`../../images/${item.img}`)}
                            alt={`Card ${item.title}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx = {{textAlign: 'center'}}>
                                {t(`title_${item.id}_card`)}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', fontSize: '1.8em', marginTop: '0.8em'}}>
                                {t(`desc_${item.id}_card`)}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="rectangle_with_buttons_in_steps">
                <Button variant="outlined" color='primary.contrastText' onClick={goToCatalog}>{t("catalog")}</Button>
            </div>
            <div className="horisontal_line">
            </div>
        </section>
    );
};

export default Main_section;