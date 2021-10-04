import { gql } from '@apollo/client';

//videos queries(always get last created)
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
