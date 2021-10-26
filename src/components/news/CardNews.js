import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const styles = {
    card: {
        margin: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    gridFour: {
        align: 'center',
    },
    media: {
        // ⚠️ object-fit is not supported by IE11.
        objectFit: 'cover',
        postion: 'relative',
        filter: 'brightness(70%)',
        transition: 'filter 0.5s ease-in-out',
        '&:hover': {
            filter: 'none',
        },
    },
    readInfo: {
        padding: '16px',
        display: 'flex',
        marginTop: 'auto',
        '& h6': {
            marginRight: '1rem',
        },
    },
};
// The issue is with the grid. The Card has max size, but the grid is larger. This leave some extra space. If you look in the debugger, there is no margin to change.

export const CardNews = ({ maxWidth, columnNumber }) => {
    return (
        <Grid container spacing={6} alignItems='stretch'>
            <Grid
                item
                xs={columnNumber.xs}
                sm={columnNumber.sm}
                md={columnNumber.md}
                sx={styles.gridFour}>
                <Card sx={{ ...styles.card, maxWidth }}>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://cdn.pixabay.com/photo/2021/09/28/14/21/clocks-6664622_960_720.jpg'
                        alt='testing pic'
                        sx={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <Box sx={styles.readInfo}>
                        <Typography variant='subtitle2'>2 hours ago</Typography>
                        <Typography variant='subtitle2'>2 min read</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid
                item
                xs={columnNumber.xs}
                sm={columnNumber.sm}
                md={columnNumber.md}
                sx={styles.gridFour}>
                <Card sx={{ ...styles.card, maxWidth }}>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://cdn.pixabay.com/photo/2021/09/28/14/21/clocks-6664622_960_720.jpg'
                        alt='testing pic'
                        sx={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <Box sx={styles.readInfo}>
                        <Typography variant='subtitle2'>2 hours ago</Typography>
                        <Typography variant='subtitle2'>2 min read</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid
                item
                xs={columnNumber.xs}
                sm={columnNumber.sm}
                md={columnNumber.md}
                sx={styles.gridFour}>
                <Card sx={{ ...styles.card, maxWidth }}>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://cdn.pixabay.com/photo/2021/09/28/14/21/clocks-6664622_960_720.jpg'
                        alt='testing pic'
                        sx={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <Box sx={styles.readInfo}>
                        <Typography variant='subtitle2'>2 hours ago</Typography>
                        <Typography variant='subtitle2'>2 min read</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid
                item
                xs={columnNumber.xs}
                sm={columnNumber.sm}
                md={columnNumber.md}
                sx={styles.gridFour}>
                <Card sx={{ ...styles.card, maxWidth }}>
                    <CardMedia
                        component='img'
                        height='140'
                        image='https://cdn.pixabay.com/photo/2021/09/28/14/21/clocks-6664622_960_720.jpg'
                        alt='testing pic'
                        sx={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <Box sx={styles.readInfo}>
                        <Typography variant='subtitle2'>2 hours ago</Typography>
                        <Typography variant='subtitle2'>2 min read</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

CardNews.propTypes = {
    maxWidth: PropTypes.string,
    columnNumber: PropTypes.object,
};
CardNews.defaultProps = {
    maxWidth: '345',
    columnNumber: {
        md: 4,
        sm: 6,
        xs: 12,
    },
};
