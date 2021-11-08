import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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
    return (
        <Box sx={styles.footerContainer}>
            <div className='container'>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={4} sx={styles.authorContainer}>
                        <Typography variant='subtitle2' color='common.white' align='center'>
                            copyright &copy; 2021 | Mutual-UCN
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={styles.descriptionContainer}>
                        <Typography variant='subtitle2' color='common.white' align='center'>
                            Nacimos para dar seguridad, salud y proteccion a los trabajadores,
                            trascendemos aportando al progreso de Chile
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box style={styles.socialContainer}>
                            <Link href='http://www.instagram.com' target='_blank' rel='noopener'>
                                <InstagramIcon fontSize='medium' sx={{ color: 'white', mr: 3 }} />
                            </Link>
                            <Link href='http://www.facebook.com' target='_blank' rel='noopener'>
                                <FacebookIcon fontSize='medium' sx={{ color: 'white', mr: 3 }} />
                            </Link>
                            <Link href='http://www.twitter.com' target='_blank' rel='noopener'>
                                <TwitterIcon fontSize='medium' sx={{ color: 'white' }} />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};
