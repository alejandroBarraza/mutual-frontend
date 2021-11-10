import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Card, Divider, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

import { styles } from './StyleCardNews';

export const CardNews = ({ descriptionInfo, data, maxWidth }) => {
    const { id, descripcion, imagen, titulo, tiempoLectura } = data;
    return (
        data && (
            <Link style={{ textDecoration: 'none' }} to={`../noticias/${id}`}>
                <Card sx={{ ...styles.card, maxWidth }}>
                    <CardMedia
                        component='img'
                        height='140rem'
                        image={imagen.url}
                        alt='testing pic'
                        sx={styles.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {titulo}
                        </Typography>
                        {descriptionInfo && (
                            <Typography variant='body2' color='text.secondary' sx={{ height: '7rem', overflow: 'hidden' }}>
                                {descripcion}
                            </Typography>
                        )}
                    </CardContent>

                    <Divider sx={{ marginTop: 'auto' }} />
                    <Box sx={styles.readInfo}>
                        <Typography variant='subtitle2'>{`${tiempoLectura}min`} </Typography>
                        <MenuBookRoundedIcon fontSize='small' color='action' />
                        <IosShareRoundedIcon
                            fontSize='small'
                            color='action'
                            sx={{ marginLeft: ' auto' }}
                        />
                    </Box>
                </Card>
            </Link>
        )
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
