import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import MaterialTable from '@material-table/core';
import { GETDOWNLOADS_SORTED_DESC } from '../../Graphql/Queries';
import { useQuery } from '@apollo/client';
import { Loading } from '../utils/Loading';
import { ErrorUI } from '../utils/ErrorUI';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
export const Downloads = () => {
    const { data, loading, error } = useQuery(GETDOWNLOADS_SORTED_DESC);
    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;
    if (!data.downloads.length) return null;

    const columns = [
        { title: 'Titulo', field: 'titulo' },
        { title: 'Descripcion', field: 'descripcion' },
    ];

    return (
        <div className='container'>
            <Typography sx={{ color: '#212B36', fontWeight: 700, mt: 6 }} variant='h5'>
                Contenido Descargable
            </Typography>
            <Box
                sx={{
                    minWidth: '100%',
                    mt: 6,
                    borderRadius: '20rem',
                }}>
                <MaterialTable
                    columns={columns}
                    data={data.downloads}
                    actions={[
                        {
                            icon: () => (
                                <DownloadRoundedIcon sx={{ color: 'var(--mutual-color)' }} />
                            ),
                            tooltip: 'descargar',
                            onClick: (event, rowData) =>
                                rowData.archivo
                                    ? window.open(
                                          rowData.archivo.url,
                                          '_blank',
                                          'noopener,resizable,scrollbars'
                                      )
                                    : null,
                        },
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        showTitle: false,
                        search: true,
                        searchFieldAlignment: 'left',

                        headerStyle: {
                            backgroundColor: ' #F4F6F8',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                            color: '#637381',
                            fontWeight: 'bold',
                        },
                    }}
                    components={{
                        Container: (props) => (
                            <Paper {...props} elevation={12} sx={{ borderRadius: '16px' }} />
                        ),
                    }}
                    localization={{
                        header: {
                            actions: '',
                        },

                        body: {
                            emptyDataSourceMessage: 'No hay datos',
                        },
                        toolbar: {
                            searchTooltip: 'Buscar',
                            searchPlaceholder: 'Buscar',
                        },
                        pagination: {
                            labelRowsSelect: 'Filas',
                            labelDisplayedRows: '{from}-{to} de {count}',
                            firstTooltip: 'Primera página',
                            previousTooltip: 'Página anterior',
                            nextTooltip: 'Página siguiente',
                            lastTooltip: 'Última página',
                            labelRowsPerPage: 'Filas por página:',
                        },
                    }}
                />
            </Box>
        </div>
    );
};
