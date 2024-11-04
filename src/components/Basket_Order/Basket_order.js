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


const Basket_order = () => {

    const busketItems = useSelector((state) => state.basket.basketItems);

    return (
        <>
            <div className="result_order">
                <h1>Итоговый заказ</h1>
            </div>
            <TableContainer component={Paper} sx={{ maxWidth: '65em', margin: "0 auto" }}>
                <Table sx={{ maxWidth: '65em' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Название</TableCell>
                            <TableCell align="center">Количество</TableCell>
                            <TableCell align="center">Итоговая цена</TableCell>
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
