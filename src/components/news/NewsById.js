import React from 'react';
import { useParams } from 'react-router-dom';

export const NewsById = () => {
    // aqui va todo tu codigo
    const { id } = useParams();
    return (
        <div className='container'>
            <h1>News by id: {id}</h1>
        </div>
    );
};
