import React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { CardNews } from './CardNews';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { Loading } from '../utils/Loading';
import { ErrorUI } from '../utils/ErrorUI';
import { GETNEWS_START_LIMIT } from '../../Graphql/Queries';
import { Typography } from '@mui/material';
import { styles } from './StyleCardNewsView';

export const CardNewsView = () => {
    const handleFetchMore = () => {
        fetchMore({
            variables: {
                start: data.news.length,
                limit: 3,
            },
            updateQuery: (prevValue, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prevValue;
                }

                return {
                    news: [...prevValue.news, ...fetchMoreResult.news],
                };
            },
        });
    };

    const { data, loading, error, fetchMore } = useQuery(GETNEWS_START_LIMIT, {
        variables: { start: 0, limit: 3 },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;

    return (
        <div className='container'>
            <Box textAling='center' sx={styles.titleContainer}>
                <Typography variant='h3'>Ultimas Noticias</Typography>
                <Typography variant='h5' align='center'>
                    todo acerca de las ultimas noticas y eventos Aun te espero
                </Typography>
            </Box>

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

// add after
// import debounce from 'lodash.debounce';
// const debouncedChangeHandler = useCallback(debounce(handleFetchMore, 1000), []);
