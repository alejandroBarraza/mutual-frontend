import React from 'react';
import { Typography } from '@mui/material';

export const ErrorForm = ({ error }) => {
    return (
        <Typography variant='caption' sx={{ mt: 1, color: 'red' }}>
            {error}
        </Typography>
    );
};
