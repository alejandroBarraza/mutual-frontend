import React, { useEffect, useState } from 'react';
import "./carrusel.css";
import { Carousel } from 'react-carousel-minimal';

export const Carrusel = () => {

   // Creacion del estado para los datos
   const [datos, setDatos] = useState([]);

   // Funcion para obtener las imagenes del carrusel via Strapi
   const obtenerDatos = async () => {
      const url = "http://localhost:1337/carrousels/4";
      const resp = await fetch(url);
      const datos = await resp.json();
      const data = await datos.carrusel_imagen.map((img) => {
         return { image: `${img.formats.medium.url}` }
      });
      setDatos(data);
      //datos.carrusel_imagen.map(x => { console.log(x.formats.medium.url); });
   }

   // Uso de hook useEffect para que solo se realize la peticion al cargar la pagina
   useEffect(() => {
      obtenerDatos();
   }, [])

   return (
      <div className="container__gallery">
         <div className='gallery'>
            <div className='gallery__text'>
               <h1>Lorem Ipsum</h1>
               <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula efficitur purus sed rutrum. Pellentesque gravida aliquet risus nec luctus. Pellentesque blandit lacinia dignissim. Ut commodo ultrices eros quis volutpat. Fusce tincidunt ligula metus, ac dapibus metus tincidunt in. Curabitur aliquam libero a arcu efficitur, tempor suscipit sem sollicitudin. Pellentesque eu condimentum leo.</p>
            </div>
            <div className='gallery__images'>
               <Carousel
                  data={datos}
                  time={6000}
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
                     overflowY: "hidden"
                  }}
               />
            </div>
         </div >

      </div >

   );
};
