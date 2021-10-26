import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

const styles = {
    card: {
        margin: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
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
        '& h6': {
            marginRight: '0.3rem',
        },
    },
};
// The issue is with the grid. The Card has max size, but the grid is larger. This leave some extra space. If you look in the debugger, there is no margin to change.

export const CardNews = ({ data, maxWidth }) => {
    const { id, descripcion, imagen, titulo, tiempoLectura } = data;
    return (
        <Link style={{ textDecoration: 'none' }} to={`./noticias/${id}`}>
            <Card sx={{ ...styles.card, maxWidth }}>
                <CardMedia
                    component='img'
                    height='140'
                    image={imagen.url}
                    alt='testing pic'
                    sx={styles.media}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {titulo}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {descripcion}
                    </Typography>
                </CardContent>
                <Divider sx={{ marginTop: 'auto' }} />
                <Box sx={styles.readInfo}>
                    <Typography variant='subtitle2'>{`${tiempoLectura}`} </Typography>
                    <MenuBookRoundedIcon fontSize='small' color='action' />
                    <IosShareRoundedIcon fontSize='small' sx={{ marginLeft: ' auto' }} />
                </Box>
            </Card>
        </Link>
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
