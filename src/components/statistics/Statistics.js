import React from 'react';
import { StatisticCard } from './StatisticCard';
import './Statistics.css';

export const Statistics = () => {
    return (
        <div className='container'>
            <div className='card-container'>
                <StatisticCard />
            </div>
        </div>
    );
};
