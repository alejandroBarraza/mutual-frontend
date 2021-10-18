import React from 'react';
import { useQuery } from '@apollo/client';
import { Loading } from './Loading';
import { ErrorUI } from './ErrorUI';
// import { emptyArr } from './EmptyArr';

export const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: parseInt(id) || null },
    });
    if (loading) return <Loading />;
    if (error) return <ErrorUI error={error.message} />;

    return children({ data });
};
