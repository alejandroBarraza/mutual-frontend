import React from 'react';
import { Video } from '../videos/Video';
import { ImagesCarousel } from './imagesCarousel/ImagesCarousel';

export const Home = () => {
    return (
        <>
            <ImagesCarousel />
            <Video />
        </>
    );
};
