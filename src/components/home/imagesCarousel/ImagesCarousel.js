import React from 'react';
import './imagesCarousel.css';
import { Carousel } from 'react-carousel-minimal';
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Graphql query to the database.
 */
export const IMAGES = gql`
    query GetCarrusel {
        carrusel {
            titulo
            descripcion
            imagenes {
                url
            }
        }
    }
`;

/**
 * This component returns a carousel of images from the main page.
 * @returns Carousel of images.
 */
export const ImagesCarousel = () => {
    /**
     * Database query.
     * @param loading indicates if data are still being downloaded.
     * @param error indicates if any error occurred.
     * @param data the data returned by the database.
     */
    const { loading, error, data } = useQuery(IMAGES);

    // Images of the Carrousel
    const images = data
        ? data.carrusel === null
            ? [
                  {
                      image: 'https://kinsta.com/es/wp-content/uploads/sites/8/2017/08/error-de-conexi%C3%B3n-base-de-datos.png',
                  },
              ]
            : data.carrusel.imagenes.map((img) => {
                  return { image: `${img.url}` };
              })
        : [];

    // Carousel Title
    const titleCarousel = data
        ? data.carrusel === null
            ? 'No existen datos disponibles'
            : data.carrusel.titulo
        : 'Loading...';

    // Carousel Description
    const descriptionCarousel = data
        ? data.carrusel === null
            ? 'No existen datos disponibles'
            : data.carrusel.descripcion
        : 'Loading...';

    // If there is an error, an error message is displayed.
    if (error) {
        return <p> Error en la base de datos. </p>;
    }

    return (
        <div className='container__gallery'>
            <div className='gallery'>
                <div className='gallery__text'>
                    <h1 id='titleCarousel'>{titleCarousel}</h1>
                    <p id='descriptionCarousel' className='text'>
                        {descriptionCarousel}
                    </p>
                </div>
                <div id='gallery__images' className='gallery__images'>
                    {
                        // If it is loading it returns a Progress Component, otherwise it returns the Component with the corresponding data.
                        loading ? (
                            <div id='loading__icon' className='loading__icon'>
                                <CircularProgress />
                            </div>
                        ) : (
                            <Carousel
                                data={images}
                                time={5000}
                                radius='16px'
                                slideNumber={false}
                                slideNumberStyle={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                }}
                                captionPosition='bottom'
                                automatic={true}
                                dots={true}
                                pauseIconColor='white'
                                pauseIconSize='40px'
                                slideBackgroundColor='darkgrey'
                                slideImageFit='cover'
                                thumbnails={false}
                                thumbnailWidth='100px'
                                style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    maxWidth: '600px',
                                    maxHeight: '600px',
                                    margin: 'auto auto',
                                    overflowY: 'true',
                                }}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};
