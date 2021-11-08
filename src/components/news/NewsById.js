import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GETNEWSBYID } from '../../Graphql/Queries';
// Convert text to html format
import showdown from 'showdown';
// Convert html to jsx because XSS (Cross Site Scripting)
import { Markup } from 'interweave';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';

const converter = new showdown.Converter();

export const NewsById = () => {
   const { id } = useParams();
   /**
    * Database query.
    * @param loading indicates if data are still being downloaded.
    * @param error indicates if any error occurred.
    * @param data the data returned by the database.
    */
   const { loading, error, data } = useQuery(GETNEWSBYID(id));
   const [title, setTitle] = useState('');
   const [presentationImage, setPresentationImage] = useState('#');
   const [data_procesed, setData_procesed] = useState([]);
   const matches = useMediaQuery('(min-width:60rem)');

   useEffect(() => {

      if (data) {
         if (data.new != null) {
            let data_procesing = [];
            let html = converter.makeHtml(data.new.cuerpo);

            if (data.new.titulo != null) {
               setTitle(data.new.titulo);
            }
            console.log(data.new);
            if (data.new.imagenPresentacion != null) {
               setPresentationImage(data.new.imagenPresentacion.url);
            }

            html = html.split('<p>').filter((text) => { return text !== '' });
            html.forEach(element => {
               element = element
                  .split('</p>')
                  .filter((text) => {
                     return text !== '' && text !== '\n'
                  })
               data_procesing = [
                  ...data_procesing,
                  ...element]
            });

            setData_procesed([
               ...data_procesed,
               ...html]);
         }
      }
   }, [data]);

   return (
      <Box sx={{
         height: '100%',
         width: '100%',
         position: 'relative'
      }} >
         <Box sx={{
            bgcolor: '#C3D600',
            height: presentationImage !== '#' ? '25rem' : '15rem',
            width: '100%',
            position: 'absolute'
         }}>
         </Box>
         <Container fixed sx={{ position: 'relative' }}>
            {
               title ? (
                  <Typography component="div">
                     <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: presentationImage !== '#' ? '10rem' : '15rem',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '3rem',
                     }}>{title}</Box>
                  </Typography>) :
                  <Skeleton variant="rectangular" width={'100%'} height={'15rem'} />
            }
         </Container >
         <Container fixed sx={{
            position: 'relative',
            py: presentationImage !== '#' ? '0rem' : '2rem'
         }}>
            {
               presentationImage !== '#' ? <img src={presentationImage} alt='Imagen de Presentacion' /> : null
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
               <Box sx={{ width: matches ? '80%' : '100%' }}>
                  {
                     data_procesed ?
                        data_procesed.map((element) => {
                           return (<Box sx={{
                              textAlign: element.includes('src') ? 'center' : 'left'
                           }}> <Markup content={element} /></Box>)
                        }) :
                        <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
                  }
               </Box>
               <Box sx={{ width: matches ? '20%' : '100%', pl: '2rem' }}>
                  Aqui va la aside
               </Box>
            </Box>
            <Box>
               Aqui va el componente de la lista de noticias
            </Box>
         </Container >
      </Box >
   )
}