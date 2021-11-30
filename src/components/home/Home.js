import React from 'react';
import { CardNewsView } from '../news/CardNewsView';
import { Statistics } from '../statistics/Statistics';
import { Video } from '../videos/Video';
import { ImagesCarousel } from './imagesCarousel/ImagesCarousel';

export const Home = () => {
    return (
        <>
            <ImagesCarousel />
            <Video />
            <Statistics />
            <div id='news'><CardNewsView /></div>
        </>
    );
};
