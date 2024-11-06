import React from 'react'
import './Not_found.css'
import { useTranslation } from 'react-i18next';

const NotFound = () => {

    const { t } = useTranslation();

    return (
        <div className = "page_not_found">
            <h3>{t("page_404")}</h3>
            <p>{t("apolog")}</p>
        </div>
    );
};

export default NotFound