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
        fetchMore({
            variables: {
                start: data.news.length,
                limit: 3,
            },
            updateQuery: (pv, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return pv;
                }

                return {
                    news: [...pv.news, ...fetchMoreResult.news],
                };
            },
        });
    };

    const { data, loading, error, fetchMore } = useQuery(GETNEWS_START_LIMIT, {
        variables: { start: 0, limit: 3 },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;
    console.log(data.news.length);

    return (
        <div className='container'>
            <Grid container spacing={6} alignItems='stretch'>
                {data.news.map((newData) => (
                    <Grid key={newData.id} item xs={12} sm={6} md={4} sx={{ align: 'center' }}>
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
