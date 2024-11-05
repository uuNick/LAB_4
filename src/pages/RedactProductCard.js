import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, deleteProduct } from '../slices/productsSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box, Typography, Alert, Snackbar } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const RedactProductCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const formRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null); // Состояние для хранения выбранного продукта
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');

    const validationSchema = yup.object({
        title: yup.string().required('Название обязательно'),
        price: yup.number().required('Цена обязательна').positive('Цена должна быть положительной'),
        img: yup.string().required('Путь к изображению обязателен'),
        type: yup.string().required('Категория обязательна'),
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCreateProductSuccess = (message) => {
        setSeverity('success');
        setMessage(message);
        setOpen(true);
    };

    const formik = useFormik({
        initialValues: selectedProduct || {
            title: '',
            price: '',
            type: '',
            img: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(selectedProduct.id);
            console.log(values);
            dispatch(updateProduct({ id: selectedProduct.id, updatedProduct: values}));
            setSelectedProduct(null);
            handleCreateProductSuccess('Карточка продукта успешно отредактирована!');
        },
    });

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        formik.setValues(product);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const goToMainPage = () => {
        navigate('/');
    };

    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: "0 auto",
                maxWidth: "100em",
                flexDirection: "row",
                justifyContent: "center",
                columnGap: "30px",
                rowGap: "40px",
                margin: "60px auto",
            }}>
                {products.map((c) => (
                    <Box key={c.id} sx={{
                        maxWidth: '225px',
                        height: '380px',
                        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        transition: "0.2s",
                    }}>
                        <Typography variant="body1">{c.title}</Typography>
                        <Button variant="outlined" color='primary.contrastText' onClick={() => handleEditClick(c)}>Редактировать</Button>
                    </Box>
                ))}
            </Box>

            <Box component="form" onSubmit={formik.handleSubmit} noValidate ref={formRef}
                sx={{
                    maxWidth: '30em',
                    margin: "10em auto ",
                }}>
                <Typography variant="h5" gutterBottom>
                    Редактирование продукта
                </Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    id="title"
                    name="title"
                    label="Название"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="price"
                    name="price"
                    label="Цена"
                    type="number"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="img"
                    name="img"
                    label="URL изображения"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                    error={formik.touched.img && Boolean(formik.errors.img)}
                    helperText={formik.touched.img && formik.errors.img}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="type"
                    name="type"
                    label="Категория"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="outlined" color='primary.contrastText' type="submit">
                        Сохранить
                    </Button>
                    <Button variant="outlined" color='primary.contrastText' onClick={goToMainPage}>
                        На главную
                    </Button>
                </Box>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default RedactProductCard;