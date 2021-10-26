import React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { CardNews } from './CardNews';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { Loading } from '../utils/Loading';
import { ErrorUI } from '../utils/ErrorUI';
import { GETNEWS_START_LIMIT } from '../../Graphql/Queries';

export const CardNewsView = () => {
    const handleFetchMore = () => {
        console.log('fetch more');
    };

    const { data, loading, error } = useQuery(GETNEWS_START_LIMIT, {
        variables: { start: 0, limit: 5 },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;

    return (
        <div className='container'>
            <Grid container spacing={6} alignItems='stretch'>
                {data.news.map((newData) => (
                    <Grid item xs={12} sm={6} md={4} sx={{ align: 'center' }}>
                        <CardNews key={newData.id} data={newData} maxWidth={'345'} />
                    </Grid>
                ))}
            </Grid>

            <Box textAlign='center' m={8}>
                <Button variant='outlined' color='success' onClick={handleFetchMore}>
                    Ver mas
                </Button>
            </Box>
        </div>
    );
};
