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
            <h2 className='title-video'>Mutual de Seguridad</h2>
            <p className='description-video'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ipsa
                voluptatem, optio placeat tenetur, veritatis ab eveniet facilis vero repudiandae
                illo! Quaerat, expedita rerum.
            </p>
            <YoutubeEmbed embedId={urlId} />
        </div>
    );
};
