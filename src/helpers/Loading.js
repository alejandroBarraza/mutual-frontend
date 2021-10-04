import React from 'react';
import { CircularProgress } from '@material-ui/core';
import '../container.css';

export const Loading = () => {
    return (
        <div className='container' style={{ textAlign: 'center' }}>
            <CircularProgress />
        </div>
    );
};
