import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GETNEWSBYID, GETNEWS_START_LIMIT } from '../../Graphql/Queries';
import showdown from 'showdown';
import { Markup } from 'interweave';
import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styles } from './StyleCardNewsView';
import { CardNews } from './CardNews';
import { PriorityDownloads } from '../download/PriorityDownloads';
import { Loading } from '../utils/Loading';

const converter = new showdown.Converter();

export const NewsById = () => {
    const { id } = useParams();
    /**
     * Database query.
     * @param loading indicates if data are still being downloaded.
     * @param error indicates if any error occurred.
     * @param data the data returned by the database.
     */
    const {
        loading: loadingData,
        error: errorData,
        data,
    } = useQuery(GETNEWSBYID, {
        variables: { new: parseInt(id) },
    });
    const {
        data: dataNews,
        loading,
        error,
    } = useQuery(GETNEWS_START_LIMIT, {
        variables: { start: 0, limit: 3 },
    });
    const [title, setTitle] = useState('');
    const [presentationImage, setPresentationImage] = useState('#');
    const [data_procesed, setData_procesed] = useState([]);
    const matches = useMediaQuery('(min-width:60rem)');

    useEffect(() => {
        setPresentationImage('#');
        if (data) {
            // // console.log(data);
            if (data.news != null && data.news.length !== 0) {
                let data_procesing = [];
                let html = converter.makeHtml(data.news[0].cuerpo);

                if (data.news[0].titulo != null) {
                    setTitle(data.news[0].titulo);
                }
                if (data.news[0].imagenDePresentacion != null) {
                    setPresentationImage(data.news[0].imagenDePresentacion.url);
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

    if (loading || loadingData) {
        return <Loading />;
    }
    if (errorData || error) {
        return (
            <Box
                sx={{
                    minHeight: '72vh',
                    width: '100%',
                    position: 'relative',
                    pb: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <p>Error in Data Base</p>
            </Box>
        );
    }

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
                                fontSize: '2rem',
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
                                            paddingBottom: '1.5rem'
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
                <div id='news'>
                    <Box textAling='left' sx={styles.titleContainerNews}>
                        <Typography variant='h5'>Ultimas Noticias</Typography>
                    </Box>
                    <Grid container spacing={6} alignItems='stretch'>
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
                                    }}>
                                    <CardNews
                                        descriptionInfo
                                        key={newData.id}
                                        data={newData}
                                        maxWidth={'345'}
                                    />
                                </Grid>
                            ))
                        ) : (
                            <Skeleton variant='rectangular' width={'100%'} height={'100%'} />
                        )}
                    </Grid>
                </div>
            </Container>
        </Box>
    );
};
