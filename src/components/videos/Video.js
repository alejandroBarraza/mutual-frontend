import React,{useEffect} from 'react';

import { Query } from '../utils/Query';
import { YoutubeEmbed } from './YoutubeEmbed';
import { GETVIDEOS } from '../../Graphql/Queries';

import './Video.css';
import '../../container.css';

// import {useInView} from 'react-intersection-observer';
// import{useAnimation,motion} from 'framer-motion';

export const Video = () => {

    // const {ref, inView} = useInView();
    // const animation = useAnimation();

    // useEffect(() => {
    //     if(inView){
    //         console.log('inView');
    //         animation.start({
    //             opacity: 1,
    //             y:0,

    //             transition: {
    //                 type: 'linear',duration: 1,bounce:1,
    //             }
    //         })
    //     }
    //     if(!inView){
    //         animation.start({opacity:0,y:-100})
    //     }
    
    
    // },[inView,animation])


    return (
        <Query query={GETVIDEOS} id={null}>
            {({ data: { videos } }) => {
                if (!videos.length) return null;
                return (
                    <div className='container'>
                        {/* <motion.div animate={animation}> */}
                            <h2 className='title-video'>{videos[0]?.titulo}</h2>
                            <p className='description-video'>{videos[0]?.descripcion}</p>
                            <YoutubeEmbed embedId={videos[0]?.links} />

                        {/* </motion.div> */}
                       
                    </div>
                );
            }}
        </Query>
    );
};
