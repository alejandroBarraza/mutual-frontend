import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GETNEWSBYID } from '../../Graphql/Queries';
import { GETNEWS_START_LIMIT } from '../../Graphql/Queries';
// Convert text to html format
import showdown from 'showdown';
// Convert html to jsx because XSS (Cross Site Scripting)
import { Markup } from 'interweave';
import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styles } from './StyleCardNewsView';
import { CardNews } from './CardNews';
import { PriorityDownloads } from '../download/PriorityDownloads';

const converter = new showdown.Converter();

export const NewsById = () => {
    const { id } = useParams();
    /**
     * Database query.
     * @param loading indicates if data are still being downloaded.
     * @param error indicates if any error occurred.
     * @param data the data returned by the database.
     */
    const { loading: loadingData, error: errorData, data } = useQuery(GETNEWSBYID(id));
    const {
        data: dataNews,
        loading,
        error,
    } = useQuery(GETNEWS_START_LIMIT, {
        variables: { start: 0, limit: 6 },
    });
    const [title, setTitle] = useState('');
    const [presentationImage, setPresentationImage] = useState('#');
    const [data_procesed, setData_procesed] = useState([]);
    const matches = useMediaQuery('(min-width:60rem)');

    useEffect(() => {
        setPresentationImage('#');
        if (data) {
            if (data.new != null) {
                let data_procesing = [];
                let html = converter.makeHtml(data.new.cuerpo);
                if (data.new.titulo != null) {
                    setTitle(data.new.titulo);
                }
                if (data.new.imagenDePresentacion != null) {
                    setPresentationImage(data.new.imagenDePresentacion.url);
                }

                html = html.split('<p>').filter((text) => {
                    return text !== '';
                });
                html.forEach((element) => {
                    element = element.split('</p>').filter((text) => {
                        return text !== '' && text !== '\n';
                    });
                    data_procesing = [...data_procesing, ...element];
                });

                setData_procesed([...html]);
            }
        }
    }, [data]);

    return (
        <Box
            sx={{
                minHeight: '72vh',
                width: '100%',
                position: 'relative',
                pb: '2rem',
            }}>
            <Box
                sx={{
                    bgcolor: '#C3D600',
                    height: presentationImage !== '#' ? '18rem' : '15rem',
                    width: '100%',
                    position: 'absolute',
                }}></Box>
            <Container sx={{ position: 'relative' }}>
                {title ? (
                    <Typography component='div'>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: presentationImage !== '#' ? '10rem' : '15rem',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '3rem',
                            }}>
                            {title}
                        </Box>
                    </Typography>
                ) : (
                    <Skeleton variant='rectangular' width={'100%'} height={'15rem'} />
                )}
            </Container>
            <Container
                fixed
                sx={{
                    position: 'relative',
                    py: presentationImage !== '#' ? '0rem' : '2rem',
                }}>
                {presentationImage !== '#' ? (
                    <Box
                        sx={{
                            maxHeight: '20rem',
                            display: 'flex',
                            justifyContent: 'center',
                            pb: '2rem',
                        }}>
                        <img src={presentationImage} alt='Imagen de Presentacion' />
                    </Box>
                ) : null}
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Box sx={{ width: matches ? '80%' : '100%' }}>
                        {data_procesed ? (
                            data_procesed.map((element, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            textAlign: element.includes('src') ? 'center' : 'left',
                                            position: 'relative',
                                        }}>
                                        <Markup content={element} />
                                    </Box>
                                );
                            })
                        ) : (
                            <Skeleton variant='rectangular' width={'100%'} height={'100%'} />
                        )}
                    </Box>
                    <Box sx={{ width: matches ? '20%' : '100%', pl: '2rem' }}>
                        <PriorityDownloads />
                    </Box>
                </Box>
                <Box textAling='left' sx={styles.titleContainerNews}>
                    <Typography variant='h6'>Ultimas Noticias</Typography>
                </Box>

                <Grid container spacing={2} alignItems='stretch'>
                    {dataNews ? (
                        dataNews.news.map((newData) => (
                            <Grid
                                key={newData.id}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                sx={{
                                    align: 'center',
                                    height: '26rem',
                                }}>
                                <CardNews descriptionInfo key={newData.id} data={newData} />
                            </Grid>
                        ))
                    ) : (
                        <Skeleton variant='rectangular' width={'100%'} height={'100%'} />
                    )}
                </Grid>
            </Container>
        </Box>
    );
};
