import React from 'react';
import { Statistics } from '../statistics/Statistics';
import { Video } from '../videos/Video';
import { ImagesCarousel } from './imagesCarousel/ImagesCarousel';

export const Home = () => {
    return (
        <>
            <Video />
            <Statistics />
        </>
    );
};
