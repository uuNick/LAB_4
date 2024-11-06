import React from 'react';
import './Basket_order.css';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';

const Basket_order = () => {

    const busketItems = useSelector((state) => state.basket.basketItems);
    
    const { t } = useTranslation();

    return (
        <>
            <div className="result_order">
                <h1>{t("final_order")}</h1>
            </div>
            <TableContainer component={Paper} sx={{ maxWidth: '65em', margin: "0 auto" }}>
                <Table sx={{ maxWidth: '65em' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{t("name")}</TableCell>
                            <TableCell align="center">{t("amount")}</TableCell>
                            <TableCell align="center">{t("final_products")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {busketItems.map((item) => (
                            <TableRow
                                key={item.id}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {item.title}
                                </TableCell>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">{item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default Basket_order;
