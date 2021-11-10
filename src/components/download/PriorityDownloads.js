import { useQuery } from '@apollo/client';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { GET_PRIORITY_DOWNLOADS } from '../../Graphql/Queries';
import { ActionAreaCard } from '../news/ActionAreaCard';

export const PriorityDownloads = () => {
   const { loading, error, data } = useQuery(GET_PRIORITY_DOWNLOADS);


   return (
      <Box sx={{ width: '100%' }}>
         {
            (data && data.downloads.lengh !== 0) ? data.downloads.map((element) => {
               return (
                     <Box sx={{ width: '100%', py: '.3rem' }} >
                        <ActionAreaCard download={element} />
                     </Box>)
            }) : <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
         }
      </Box>
   );
}