import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../slices/productsSlice';
import { TextField, Button, Typography, Box, Alert, Snackbar} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object({
    title: yup.string().required('Название обязательно'),
    price: yup.number().required('Цена обязательна').positive('Цена должна быть положительной'),
    img: yup.string().required('Путь к изображению обязателен'),
    type: yup.string().required('Категория обязательна'),
});


const CreateProductCard = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');
    const { t } = useTranslation();

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

    const handleCreateProductError = (message) => {
        setSeverity('error');
        setMessage(message);
        setOpen(true);
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            type: '',
            img: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            try {
                const valuesWithIndex = { id: products.length + 1, ...values };
                dispatch(createProduct(valuesWithIndex));
                handleCreateProductSuccess(t("cr_success"));
                resetForm();
            } catch (e) {
                const er_text = t("er_success");
                handleCreateProductError(`er_text ${e.message}`);
            }
        },
    });

    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate('/');
    };

    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate
                sx={{
                    maxWidth: '30em',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    textAlign: 'center',
                }}>
                <Typography variant="h5" gutterBottom>
                    {t("create_product")}
                </Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    id="title"
                    name="title"
                    label={t("name")}
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
                    label={t("price")}
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
                    label={t("url")}
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
                    label={t("category")}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="outlined" color='primary.contrastText' type="submit">
                        {t("create")}
                    </Button>
                    <Button variant="outlined" color='primary.contrastText' onClick={goToMainPage}>
                        {t("main")}
                    </Button>
                </Box>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default CreateProductCard;