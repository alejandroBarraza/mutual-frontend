import React from 'react';
import { CardNewsView } from '../news/CardNewsView';
import { Statistics } from '../statistics/Statistics';
import { Video } from '../videos/Video';
import { ImagesCarousel } from './imagesCarousel/ImagesCarousel';
import {useInView} from 'react-intersection-observer';
import{useAnimation,motion} from 'framer-motion';
export const Home = () => {

    const {ref, inView} = useInView();
    const animation = useAnimation();

    React.useEffect(() => {
        if(inView){
            console.log('inView');
            animation.start({
                x:0,
                opacity: 1,

                transition: {
                    type: 'linear',duration: 1,bounce:1,
                }
            })
        }
        if(!inView){
            animation.start({opacity:0,x:'-100vw'})
        }
    
    
    },[inView,animation])
    return (
        <>
            <ImagesCarousel />
            <Video />
            <div ref={ref} >
                <motion.div animate={animation}>
                    <Statistics/>
                </motion.div>
            </div>
            
            <div id='news'><CardNewsView /></div>
        </>
    );
};
