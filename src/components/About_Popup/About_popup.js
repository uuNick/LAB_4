import React, { useState } from 'react';
import Logo from '../../images/logo/logo.svg';
import data from '../../data/contact_icons.json'
import './About_popup.css'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

const About_popup = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { t } = useTranslation();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '40em',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <p className="item_in_footer" onClick={handleOpen}><a className="link_item_in_footer">О нас</a></p>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className="modal">
                        <img className="logo_in_modal" src={Logo} alt="Deliver X logo icon" />
                        <p className="info_after_logo">{t("service")}</p>
                        <p className="common_inf">{t("desc_in_modal")}</p>
                        <p className="contact_info">{t("we_in_soc")}</p>
                        <div className="contact_icons">
                            {data.map(item => (
                                <a href='#' key={item.id}><img className='icon' src={require(`../../images/${item.img}`)} alt={`Contact icon ${item.id}`} /></a>
                            ))}
                        </div>
                        <Button variant='outlined' color='primary.contrastText' onClick={handleClose}>
                            {t("close")}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default About_popup;