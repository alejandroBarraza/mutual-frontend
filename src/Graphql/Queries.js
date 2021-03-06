import { gql } from '@apollo/client';

// Videos queries(always get last created)
export const GETVIDEOS = gql`
    query Getvideo {
        videos(limit: 1, sort: "created_at:desc") {
            created_at
            titulo
            descripcion
            links
        }
    }
`;

// Statistic query(always get last 4 created)
export const GETSTATISTICS = gql`
    query GetStatistic {
        statistics(limit: 4, sort: "created_at:asc") {
            titulo
            descripcion
            created_at
        }
    }
`;

// Images of the Carousel.
export const IMAGES = gql`
    query GetCarrusel {
        carrusel {
            titulo
            descripcion
            imagenes {
                url
            }
        }
    }
`;

// News by ID query
export const GETNEWSBYID = gql`
    query GetNewsById($new: Int!) {
        news(where: { id: $new }) {
            titulo
            cuerpo
            imagenDePresentacion {
                url
            }
        }
    }
`;
// get download content given limit and start =="offset" as arguments
export const GETDOWNLOADS_LIMIT_START = gql`
    query GetDownloads($start: Int!, $limit: Int!) {
        downloads(start: $start, limit: $limit) {
            id
            published_at
            titulo
            imagenes {
                name
                url
            }
        }
    }
`;

export const GETDOWNLOADS_SORTED_DESC = gql`
    query GetDownloads {
        downloads(sort: "created_at:desc") {
            id
            titulo
            descripcion
            archivo {
                url
            }
        }
    }
`;

export const GETNEWS_START_LIMIT = gql`
    query getNews($limit: Int!, $start: Int!) {
        news(limit: $limit, start: $start, sort: "created_at:desc") {
            id
            titulo
            descripcion
            tiempoLectura
            imagen {
                url
            }
        }
    }
`;

// get the footer elements
export const GET_ALL_FOOTER = gql`
    query getFooter {
        footer {
            selloSeguridad
            descripcion
            instagram
            facebook
            twitter
            youtube
        }
    }
`;

export const GET_PRIORITY_DOWNLOADS = gql`
    query getNews($limit: Int!) {
        downloads(limit: $limit, sort: "created_at:desc", where: { fijar: true }) {
            id
            imagen {
                url
            }
            archivo {
                url
            }
            fijar
        }
    }
`;

//getnews by id news

export const GETNEWS_START_LIMIT_BYID = gql`
    query getNews($limit: Int!, $start: Int!) {
        news(limit: $limit, start: $start, sort: "created_at:desc") {
            id
            titulo
            descripcion
            tiempoLectura
            imagen {
                url
            }
        }
    }
`;
