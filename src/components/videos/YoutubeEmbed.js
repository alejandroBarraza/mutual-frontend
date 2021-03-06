import React from 'react';
import PropTypes from 'prop-types';
import { youtube_parser } from '../../helpers/youtubeParser';
import './YoutubeEmbed.css';

export const YoutubeEmbed = ({ embedId }) => {
    const urlId = youtube_parser(embedId);
    return (
        <div className='container-video'>
            <iframe
                width='853'
                height='480'
                src={`https://www.youtube.com/embed/${urlId}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Embedded youtube'
            />
        </div>
    );
};
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};
