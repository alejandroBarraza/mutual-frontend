import React from 'react';
import { useQuery } from '@apollo/client';

import { Box, Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { GET_ALL_FOOTER } from '../../../Graphql/Queries';
import { ErrorUI } from '../../utils/ErrorUI';
import { Loading } from '../../utils/Loading';

const styles = {
    footerContainer: {
        backgroundColor: 'var(--mutual-color)',
        borderRadius: '4px 4px 0 0',
    },

    authorContainer: {
        padding: '1rem 0',
    },
    descriptionContainer: {
        padding: '1rem 0 ',
    },
    socialContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0',
    },
};

export const Footer = () => {
    const { data, loading, error } = useQuery(GET_ALL_FOOTER);

    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;
    if (!data) return null;

    return (
        <Box sx={styles.footerContainer}>
            <div className='container'>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={4} sx={styles.authorContainer}>
                        <Typography variant='subtitle2' color='common.white' align='center'>
                            {data.footer.selloSeguridad}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={styles.descriptionContainer}>
                        <Typography variant='subtitle2' color='common.white' align='center'>
                            {data.footer.descripcion}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={styles.socialContainer}>
                            <Link href={data.footer.links.instagram} target='_blank' rel='noopener'>
                                <InstagramIcon fontSize='medium' sx={{ color: 'white', mr: 3 }} />
                            </Link>
                            <Link href={data.footer.links.facebook} target='_blank' rel='noopener'>
                                <FacebookIcon fontSize='medium' sx={{ color: 'white', mr: 3 }} />
                            </Link>
                            <Link href={data.footer.links.twitter} target='_blank' rel='noopener'>
                                <TwitterIcon fontSize='medium' sx={{ color: 'white' }} />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};
