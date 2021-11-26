import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { BootstrapInput, styles } from './FormStyles';

export const Form = () => {
    const matches = useMediaQuery('(min-width:768px)');

    const [formValues, handleInputChange, clearForm] = useForm({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        job: '',
        need: '',
    });

    const { name, lastName, email, phone, company, job, need } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:1337/mensajes/customMail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: name,
                apellido: lastName,
                correo: email,
                telefono: phone,
                empresa: company,
                cargo: job,
                descripcion: need,
            }),
        })
            .then(() => clearForm())
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
                    onSubmit={handleSubmit}
                    sx={{ display: matches ? 'grid' : 'flex', ...styles.boxForm }}>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Nombre
                        </InputLabel>
                        <BootstrapInput
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                            type='text'
                            required
                        />
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Apellido
                        </InputLabel>
                        <BootstrapInput
                            name='lastName'
                            value={lastName}
                            onChange={handleInputChange}
                            type='text'
                            required
                        />
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Correo
                        </InputLabel>
                        <BootstrapInput
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                            type='mail'
                            required
                        />
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Numero de Telefono
                        </InputLabel>
                        <BootstrapInput name='phone' value={phone} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Empresa
                        </InputLabel>
                        <BootstrapInput
                            name='company'
                            value={company}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Cargo
                        </InputLabel>
                        <BootstrapInput name='job' value={job} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl variant='standard' sx={{ gridColumn: '1 / 3' }}>
                        <InputLabel shrink htmlFor='bootstrap-input' sx={{ fontSize: '1.5rem' }}>
                            Cuentanos tus necesidades
                        </InputLabel>
                        <BootstrapInput
                            name='need'
                            value={need}
                            onChange={handleInputChange}
                            multiline
                            maxRows={6}
                        />
                    </FormControl>
                    <Button type='submit' variant='contained' color='success' sx={styles.boxButton}>
                        Enviar
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
