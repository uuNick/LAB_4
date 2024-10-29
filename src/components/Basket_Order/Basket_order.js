import React from 'react';
import './Basket_order.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Basket_order = ({ BasketItems, quantities }) => {
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
                        {BasketItems.map((item) => (
                            <TableRow
                                key={item.id}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {item.title}
                                </TableCell>
                                <TableCell align="center">{quantities[item.id]}</TableCell>
                                <TableCell align="center">{(item.price * quantities[item.id]).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default Basket_order;
