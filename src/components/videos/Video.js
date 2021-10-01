import React from 'react';
import '../../container.css';
import { youtube_parser } from '../../helpers/youtubeParser';
import './Video.css';
import { YoutubeEmbed } from './YoutubeEmbed';
export const Video = () => {
    const urlId = youtube_parser('https://www.youtube.com/watch?v=rokGy0huYEA&t=2s');
    console.log(urlId);
    return (
        <div className='container'>
            <h2 className='title-video'>
                Contribuir a la protección de los trabajadores es nuestra razón de existir
            </h2>
            <p className='description-video'>
                Nos regimos por la Ley 16.744 entregando asesoría a empresas en prevención de
                accidentes laborales y enfermedades profesionales. Brindamos atención de salud a los
                trabajadores en caso de ocurrir un siniestro, acompañamos al trabajador en el
                reintegro a sus labores, así como el pago de subsidios y pensiones.
            </p>
            <YoutubeEmbed embedId={urlId} />
        </div>
    );
};
