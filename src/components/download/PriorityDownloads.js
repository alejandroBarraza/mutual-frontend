import { useQuery } from '@apollo/client';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { GET_PRIORITY_DOWNLOADS } from '../../Graphql/Queries';
import { ActionAreaCard } from '../news/ActionAreaCard';
import { ErrorUI } from '../utils/ErrorUI';
import { Loading } from '../utils/Loading';

export const PriorityDownloads = () => {
    const { loading, error, data } = useQuery(GET_PRIORITY_DOWNLOADS, { variables: { limit: 6 } });
    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;
    if (!data.downloads.length) return null;

    return (
        <Box sx={{ width: '100%' }}>
            {data && data.downloads.lengh !== 0 ? (
                data.downloads.map((element) => {
                    return element.imagen != null && element.archivo != null ? (
                        <Box sx={{ width: '100%', py: '.3rem' }} key={element.id}>
                            <ActionAreaCard download={element} />
                        </Box>
                    ) : null;
                })
            ) : (
                <Skeleton variant='rectangular' width={'100%'} height={'100%'} />
            )}
        </Box>
    );
};
