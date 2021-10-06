import React, { useEffect, useState } from 'react';
import "./carrusel.css";
import { Carousel } from 'react-carousel-minimal';
import { useQuery, gql } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';

/**
 * Graphql query to the database.
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
 * This component returns a carousel of images from the main page.
 * @returns Carousel of images.
 */
export const Carrusel = () => {

   /**
    * Database query.
    * @param loading indicates if data are still being downloaded.
    * @param error indicates if any error occurred.
    * @param data the data returned by the database.
    */
   const { loading, error, data } = useQuery(IMAGES)

   // Images of the Carrousel
   const images = data ? data.carrousels[0].carrusel_imagen.map((img) => { return { image: `${img.url}` } }) : [];

   // Carousel Title
   const titleCarousel = data ? data.textoCarrusel.titulo : 'Loading.....';

   // Carousel Description
   const descriptionCarousel = data ? data.textoCarrusel.descripcion : 'Loading.....';

   // If there is an error, an error message is displayed.
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
                  // If it is loading it returns a Progress Component, otherwise it returns the Component with the corresponding data.
                  loading ?
                     <div className='loading__icon'>
                        <CircularProgress />
                     </div> :
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
