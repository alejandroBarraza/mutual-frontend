import React, { Suspense } from 'react';
import { Loading } from '../utils/Loading';
import { ImagesCarousel } from './imagesCarousel/ImagesCarousel';
const Video = React.lazy(() => import('../videos/Video'));
const Statistics = React.lazy(() => import('../statistics/Statistics'));
const CardNewsView = React.lazy(() => import('../news/CardNewsView'));
export const Home = () => {
    return (
        <>
            <ImagesCarousel />
            <Suspense fallback={<Loading />}>
                <Video />
                <Statistics />
                <div id='news'>
                    <CardNewsView />
                </div>
            </Suspense>
        </>
    );
};
