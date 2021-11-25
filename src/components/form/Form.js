import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useForm } from '../../hooks/useForm';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
   'label + &': {
      marginTop: theme.spacing(3),
   },
   '& .MuiInputBase-input': {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: '#FAFAFA',
      border: '2px solid #ced4da',
      fontSize: '1.5rem',
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
         'border-color',
         'background-color',
         'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
         boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
         borderColor: theme.palette.primary.main,
      },
   },
}));


const handleSubmit = (e) => {
   e.preventDefault()
   // Aqui deberias hacer el proceso de enviar la consulta con los datos a la pagina

   console.log(e.target.lastName.value);
}

export const Form = () => {
   const [formValues, handleInputChange] = useForm({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      job: '',
      need: ''
   })

   const { name, lastName, email, phone, company, job, need } = formValues;

   const matches = useMediaQuery('(min-width:768px)');

   return (
      <Box
         sx={{
            minHeight: '72vh',
            width: '100%',
            position: 'relative',
            pb: '4rem',
         }}>
         <Box
            sx={{
               bgcolor: '#C3D600',
               height: '36vh',
               width: '100%',
               position: 'absolute',
            }}></Box>
         <Container sx={{
            position: 'relative',
            pt: '4rem',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
         }}>
            <Typography component='div'>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     textAlign: 'center',
                     height: '2rem',
                     color: '#fff',
                     fontSize: '3rem',
                  }}>
                  Contacto
               </Box>
            </Typography>
            <Box
               component="form"
               noValidate
               autoComplete="off"
               sx={{
                  display: matches ? 'grid' : 'flex',
                  flexDirection: 'column',
                  gridTemplateColumns: { sm: '1fr 1fr' },
                  gap: 2,
                  width: '90%',
                  height: '100%',
                  mt: '2rem',
                  padding: '2rem',
                  bgcolor: '#fff',
                  borderRadius: '.8rem',
                  boxShadow: 3
               }}
               onSubmit={handleSubmit}
            >
               <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Nombre
                  </InputLabel>
                  <BootstrapInput name='name' value={name} onChange={handleInputChange} />
               </FormControl>
               <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Apellido
                  </InputLabel>
                  <BootstrapInput name='lastName' value={lastName} onChange={handleInputChange} />
               </FormControl>
               <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Correo
                  </InputLabel>
                  <BootstrapInput name='email' value={email} onChange={handleInputChange} />
               </FormControl>
               <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Numero de Telefono
                  </InputLabel>
                  <BootstrapInput name='phone' value={phone} onChange={handleInputChange} />
               </FormControl>
               <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Empresa
                  </InputLabel>
                  <BootstrapInput name='company' value={company} onChange={handleInputChange} />
               </FormControl>
               <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Cargo
                  </InputLabel>
                  <BootstrapInput name='job' value={job} onChange={handleInputChange} />
               </FormControl>
               <FormControl variant="standard" sx={{ gridColumn: '1 / 3' }}>
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.5rem' }}>
                     Cuentanos tus necesidades
                  </InputLabel>
                  <BootstrapInput name='need' value={need} onChange={handleInputChange} multiline
                     maxRows={6} />
               </FormControl>
               <Button type='submit' variant="contained" color='success' sx={{ gridColumn: '1 / 3', bgcolor: '#C3D600', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                  Enviar
               </Button>
            </Box>
         </Container>
      </Box>
   )
}