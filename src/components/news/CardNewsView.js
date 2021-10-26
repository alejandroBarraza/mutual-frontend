import React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { CardNews } from './CardNews';

export const CardNewsView = () => {
    return (
        <div className='container'>
            <CardNews
                maxWidth={'345'}
                columnNumber={{
                    md: 4,
                    sm: 6,
                    xs: 12,
                }}
            />
            <Box textAlign='center' m={8}>
                <Button variant='outlined' color='success'>
                    Ver mas
                </Button>
            </Box>
        </div>
    );
};
