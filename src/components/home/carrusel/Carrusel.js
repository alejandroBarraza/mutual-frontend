import React, { useEffect, useState } from 'react';
import "./carrusel.css";
import { Carousel } from 'react-carousel-minimal';
import { useQuery, gql } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';

/**
 * Consulta Graphql a la base de datos.
 */
const IMAGES = gql`
   query GetCarrousel {
      carrousels{
         carrusel_imagen{
            url
         }
      }
      textoCarrusel{
         titulo
         descripcion
      }
   }`

/**
 * Este componente retorna un carrusel de imagenes de la pagina princpal
 * @returns Carrusel de imagenes.
 */
export const Carrusel = () => {

   /**
    * Consulta a la base de datos.
    * @param loading indica si aun se estan descargando los datos
    * @param error indica si ocurrio algun error
    * @param data los datos retornados por la base de datos 
    */
   const { loading, error, data } = useQuery(IMAGES)

   // 
   const images = data ? data.carrousels[0].carrusel_imagen.map((img) => { return { image: `${img.url}` } }) : [];
   const titleCarousel = data ? data.textoCarrusel.titulo : 'Loading.....';
   const descriptionCarousel = data ? data.textoCarrusel.descripcion : 'Loading.....';

   // Si existe un error despliega un mensaje de error.
   if (error) { return <p>  Error </p> };

   return (
      <div className="container__gallery">
         <div className='gallery'>
            <div className='gallery__text'>
               <h1>{titleCarousel}</h1>
               <p className='text'>{descriptionCarousel}</p>
            </div>
            <div className='gallery__images'>
               {
                  // Si esta cargando retorna un Componente de Progreso sino retorna el Componente con los datos correspondientes.
                  loading ?
                     <div className='loading__icon'><CircularProgress /></div> :
                     <Carousel
                        data={images}
                        time={5000}
                        radius="16px"
                        slideNumber={false}
                        slideNumberStyle={{
                           fontSize: '20px',
                           fontWeight: 'bold'
                        }}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                           textAlign: "center",
                           width: "100%",
                           maxWidth: "600px",
                           maxHeight: "600px",
                           margin: "auto auto",
                           overflowY: "true"
                        }}
                     />
               }
            </div>
         </div >
      </div >
   );



};
