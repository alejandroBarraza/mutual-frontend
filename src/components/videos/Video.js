import React from 'react';
import '../../container.css';
import { youtube_parser } from '../../helpers/youtubeParser';
import './Video.css';
import { YoutubeEmbed } from './YoutubeEmbed';
import { useQuery } from '@apollo/client';
import { GETVIDEOS } from '../../Graphql/Queries';

export const Video = () => {
    const { data, loading, error } = useQuery(GETVIDEOS);
    if (loading) return <p>loading....</p>;
    if (error) return <p>{error}</p>;

    const urlId = youtube_parser(data.videos[0].links);
    return (
        <div className='container'>
            <h2 className='title-video'>{data.videos[0].titulo}</h2>
            <p className='description-video'>{data.videos[0].descripcion}</p>
            <YoutubeEmbed embedId={urlId} />
        </div>
    );
};
