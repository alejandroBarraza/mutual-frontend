import React from 'react';

import { Query } from '../utils/Query';
import { YoutubeEmbed } from './YoutubeEmbed';
import { GETVIDEOS } from '../../Graphql/Queries';

import './Video.css';
import '../../container.css';

const Video = () => {
    return (
        <Query query={GETVIDEOS} id={null}>
            {({ data: { videos } }) => {
                if (!videos.length) return null;
                return (
                    <div className='container'>
                        <h2 className='title-video'>{videos[0]?.titulo}</h2>
                        <p className='description-video'>{videos[0]?.descripcion}</p>
                        <YoutubeEmbed embedId={videos[0]?.links} />
                    </div>
                );
            }}
        </Query>
    );
};
export default Video;
