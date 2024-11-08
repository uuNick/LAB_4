import React from 'react';
import Header from '../components/Header/Header';
import Main_section from '../components/Main_section/Main_section';
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const Main = () => {

    const { t } = useTranslation();

    const links = [
        { path: '/catalog', text: t("catalog") },
        { path: '/create_product_card', text: t("create") },
        { path: '/redact_product_card', text: t("redact")},
    ];
    const additional_pages_links = [
        { href: 'mailto:nikitasidarenko@gmail.com', text: 'nikitasidarenko@gmail.com' },
        { href: 'https://uunick.github.io/Deliver-X/tel:+375291234567', text: '902 324 4458' },
        { href: 'https://github.com/uuNick', text: 'GitHub' },
    ]

    return (
        <div>
            <Header links={links} />
            <main>
                <Main_section />
            </main>
            <Footer main_pages_links={links} additional_pages_links={additional_pages_links} />
        </div>
    );
}

export default Main;
