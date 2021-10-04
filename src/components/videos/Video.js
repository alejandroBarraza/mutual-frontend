import React from 'react';
import { useQuery } from '@apollo/client';
import { YoutubeEmbed } from './YoutubeEmbed';
import { GETVIDEOS } from '../../Graphql/Queries';
import './Video.css';
import '../../container.css';
import { Loading } from '../../helpers/Loading';

export const Video = () => {
    const { data, loading, error } = useQuery(GETVIDEOS);
    if (loading) return <Loading />;
    if (error) return <p>{JSON.stringify(error)}</p>;

    return (
        <div className='container'>
            <div>
                <h2 className='title-video'>{data.videos[0].titulo}</h2>
                <p className='description-video'>{data.videos[0].descripcion}</p>
                <YoutubeEmbed embedId={data.videos[0].links} />
            </div>
        </div>
    );
};
