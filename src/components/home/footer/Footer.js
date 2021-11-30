import React from 'react';
import { useQuery } from '@apollo/client';

import { Box, Grid, Typography, Link, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { GET_ALL_FOOTER } from '../../../Graphql/Queries';
import { ErrorUI } from '../../utils/ErrorUI';
import { Loading } from '../../utils/Loading';

const styles = {
    socialContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: '1rem 0',
    },
};

export const Footer = () => {
    const { data, loading, error } = useQuery(GET_ALL_FOOTER);
    const matches = useMediaQuery('(min-width:768px)');
    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;
    if (!data) return null;

    return (
        <Box sx={{
            backgroundColor: 'var(--mutual-color)',
            height: matches ? '14vh' : '12rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
        }}>
            <Box className='containerFooter'>
                <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center" >
                    <Grid item xs={12} md={4}>
                        <Typography variant='subtitle2' color='common.white' align='center'>
                            {data.footer.selloSeguridad}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='subtitle2' color='common.white' align='center'>
                            {data.footer.descripcion}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={styles.socialContainer}>
                            {data.footer.instagram ? (
                                <Link href={data.footer.instagram} target='_blank' rel='noopener'>
                                    <InstagramIcon
                                        fontSize='medium'
                                        sx={{ color: 'white', mr: 3 }}
                                    />
                                </Link>
                            ) : null}
                            {data.footer.facebook ? (
                                <Link href={data.footer.facebook} target='_blank' rel='noopener'>
                                    <FacebookIcon
                                        fontSize='medium'
                                        sx={{ color: 'white', mr: 3 }}
                                    />
                                </Link>
                            ) : null}
                            {data.footer.twitter ? (
                                <Link href={data.footer.twitter} target='_blank' rel='noopener'>
                                    <TwitterIcon fontSize='medium' sx={{ color: 'white', mr: 3 }} />
                                </Link>
                            ) : null}

                            {data.footer.youtube ? (
                                <Link href={data.footer.youtube} target='_blank' rel='noopener'>
                                    <YouTubeIcon fontSize='medium' sx={{ color: 'white', mr: 3 }} />
                                </Link>
                            ) : null}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};
