import React from 'react';
import { GETSTATISTICS } from '../../Graphql/Queries';
import { Query } from '../utils/Query';
import './StatisticCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandHoldingHeart,
    faHandshake,
    faStar,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

export const StatisticCard = () => {
    return (
        <Query query={GETSTATISTICS} id={null}>
            {({ data: { statistics } }) => {
                return (
                    <>
                        <div className='card' key={statistics[0].titulo}>
                            <FontAwesomeIcon icon={faHandHoldingHeart} className='icon-style' />
                            <h2>{statistics[0].titulo}</h2>
                            <p>{statistics[0].descripcion}</p>
                        </div>
                        <div className='card' key={statistics[1].titulo}>
                            <FontAwesomeIcon icon={faHandshake} className='icon-style' />
                            <h2>{statistics[1].titulo}</h2>
                            <p>{statistics[1].descripcion}</p>
                        </div>
                        <div className='card' key={statistics[2].titulo}>
                            <FontAwesomeIcon icon={faStar} className='icon-style' />
                            <h2>{statistics[2].titulo}</h2>
                            <p>{statistics[2].descripcion}</p>
                        </div>
                        <div className='card' key={statistics[3].titulo}>
                            <FontAwesomeIcon icon={faUserPlus} className='icon-style' />
                            <h2>{statistics[3].titulo}</h2>
                            <p>{statistics[3].descripcion}</p>
                        </div>
                    </>
                );
            }}
        </Query>
    );
};
