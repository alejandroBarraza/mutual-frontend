import React from 'react';
import { useQuery } from '@apollo/client';

import { Grid, Typography } from '@mui/material';

import { Box } from '@mui/system';

import { GETLASTNEWS } from '../../Graphql/Queries';
import { ErrorUI } from '../utils/ErrorUI';
import { Loading } from '../utils/Loading';
import { styles } from './StyleCardNewsView';
import { LastNews } from './LastNews';

export const LastNewsView = () => {

    const { data, loading, error } = useQuery(GETLASTNEWS, {
        variables: { start: 0, limit: 3 },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;

    return (
        <div className='container'>
            <Box textAling='center' sx={styles.titleContainer}>
                <Typography variant='h4'>Ultimas Noticias</Typography>
            </Box>

            <Grid container spacing={6} alignItems='stretch'>
                {data.news.map((newData) => (
                    <Grid key={newData.id} item xs={12} sm={6} md={4} sx={{ align: 'center' }}>
                        <LastNews
                            descriptionInfo
                            key={newData.id}
                            data={newData}
                            maxWidth={'345'}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

