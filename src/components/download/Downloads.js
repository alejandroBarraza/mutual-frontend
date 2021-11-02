import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Box } from '@mui/material';
import MaterialTable from '@material-table/core';

// let theme = createTheme({
//     typography: {
//         fontFamily: 'Public Sans',
//         allVariants: {
//             color: '(var--paragraph-color)',
//         },
//     },
// });

export const Downloads = () => {
    // const { data, loading, error } = useQuery();

    // if (loading) return <Loading />;
    // if (error) return <ErrorUI error={error.message} />;
    const columns = [
        { title: 'Titulo', field: 'title' },
        { title: 'Descripcion', field: 'description' },
    ];
    const data = [
        {
            title: 'prevencion accidentes',
            description: 'Lorem, ipsum dolor sit amet ',
        },
        {
            title: 'prevencion accidentes',
            description: 'Lorem, ipsum dolor sit amet .',
        },
        {
            title: 'a',
            description: 'Lorem, ipsum dolor sit amet .',
        },
        {
            title: 'prevencion accidentes',
            description: 'Lorem, ipsum dolor sit amet .',
        },
        {
            title: 'prevencion accidentes',
            description: 'Lorem, ipsum dolor sit amet .',
        },
        {
            title: 'prevencion accidentes',
            description: 'Lorem, ipsum dolor sit amet .',
        },
        {
            title: 'prevencion accidentes',
            description: 'Lorem, ipsum dolor sit amet .',
        },
    ];

    return (
        // <ThemeProvider theme={theme}>
        <div className='container'>
            <Box sx={{ mt: 6, borderRadius: '2rem' }}>
                <MaterialTable
                    columns={columns}
                    data={data}
                    actions={[
                        {
                            icon: 'download',
                            tooltip: 'descargar',
                            onClick: (event, rowData) => alert('You saved ' + rowData.name),
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
                        },
                        editCellStyle: { borderRadius: '2rem' },
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
        // </ThemeProvider>
    );
};
