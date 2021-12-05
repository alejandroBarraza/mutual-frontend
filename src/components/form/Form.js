import React from 'react';

import { useForm } from 'react-hook-form';
import {
    Button,
    Container,
    Typography,
    useMediaQuery,
    InputLabel,
    FormControl,
    Box,
} from '@mui/material';
import { BootstrapInput, styles } from './FormStyles';


import { ErrorForm } from './ErrorForm';
import { API_URL } from '../utils/url';

export const Form = () => {
    const matches = useMediaQuery('(min-width:768px)');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        fetch(`${API_URL}/mensajes/customMail`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(() => e.target.reset())
            .catch((err) => console.log(err));
    };

    return (
        <Box sx={styles.outterBox}>
            <Box sx={styles.innerBox}></Box>
            <Container sx={styles.container}>
                <Typography component='div'>
                    <Box sx={styles.boxTitle}>Contacto</Box>
                </Typography>
                <Box
                    component='form'
                    noValidate
                    autoComplete='off'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: matches ? 'grid' : 'flex', ...styles.boxForm }}>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Nombre
                        </InputLabel>
                        <BootstrapInput {...register('nombre', { required: true })} />
                        {errors.nombre && <ErrorForm error='El nombre es requerido' />}
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Apellido
                        </InputLabel>
                        <BootstrapInput type='text' {...register('apellido', { required: true })} />
                        {errors.apellido && <ErrorForm error='El apellido es requerido' />}
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Correo
                        </InputLabel>
                        <BootstrapInput
                            type='email'
                            {...register('correo', {
                                required: {
                                    value: true,
                                    message: 'El correo es requerido',
                                },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Ingresar un email válido',
                                },
                            })}
                        />
                        {errors.correo && <ErrorForm error={errors.correo.message} />}
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Numero de Telefono
                        </InputLabel>
                        <BootstrapInput
                            placeholder='+569 XXXX XXXX'
                            {...register('telefono', {
                                required: {
                                    value: true,
                                    message: 'el teléfono es requerido',
                                },
                                minLength: {
                                    min: 8,
                                    message: 'El número debe contener minimo 8 caracteres',
                                },
                            })}
                        />
                        {errors.telefono && <ErrorForm error={errors.telefono.message} />}
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Empresa
                        </InputLabel>
                        <BootstrapInput {...register('empresa', { required: true })} />
                        {errors.empresa && <ErrorForm error='La empresa es requerida' />}
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Cargo
                        </InputLabel>
                        <BootstrapInput {...register('cargo', { required: true })} />
                        {errors.cargo && <ErrorForm error='El cargo es requerido' />}
                    </FormControl>
                    <FormControl variant='standard' sx={{ gridColumn: '1 / 3' }}>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Cuentanos tus necesidades
                        </InputLabel>
                        <BootstrapInput
                            {...register('descripcion', { required: true })}
                            multiline
                            maxRows={6}
                        />
                        {errors.descripcion && <ErrorForm error='La descripción es requerida' />}
                    </FormControl>
                    <Button type='submit' variant='contained' color='success' sx={styles.boxButton}>
                        Enviar
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
