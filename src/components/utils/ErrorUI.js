import React from 'react';
import './ErrorUi.css';

export const ErrorUI = ({ error }) => {
    console.log(error);
    return (
        <div className='container'>
            <div className='container-error'>
                <p>{JSON.stringify(error)}</p>
            </div>
        </div>
    );
};
