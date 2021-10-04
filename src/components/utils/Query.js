import React from 'react';
import { useQuery } from '@apollo/client';
import { Loading } from './Loading';

export const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: parseInt(id) },
    });
    if (loading) return <Loading />;
    if (error) return <p>{JSON.stringify(error)}</p>;
    return children({ data });
};
