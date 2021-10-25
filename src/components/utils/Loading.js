import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import '../container.css';

export const Loading = () => {
    return (
        <div className='container' style={{ textAlign: 'center' }}>
            <CircularProgress />
        </div>
    );
};
