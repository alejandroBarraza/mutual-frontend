import { render, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@wojtekmaj/enzyme-adapter-react-17';
import { CardNews } from '../../components/news/CardNews';
import { MemoryRouter } from 'react-router';
import { GETNEWS_START_LIMIT } from '../../Graphql/Queries';
afterEach(cleanup);

const mocks = [
    {
        request: {
            query: GETNEWS_START_LIMIT,
            variables: {
                start: 0,
                limit: 3,
            },
        },
        result: {
            data: {
                news: {
                    id: '3',
                    titulo: 'notica de prueba 1',
                    descripcion: 'la mejor noticia 1',
                    tiempoLectura: 1,
                    imagen: {
                        url: 'https://res.cloudinary.com/dkfgeruxd/image/upload/v1632330012/arquitectura_drawio_735b384d8f.png',
                    },
                },
            },
        },
    },
];

describe('Testing <CardNews/> component ', () => {
    it('render should march with snapshot', async () => {
        const { container } = render(
            <MemoryRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CardNews data={mocks} descriptionInfo maxWidth={'345'} />
                </MockedProvider>
            </MemoryRouter>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        expect(container).toMatchSnapshot();
    });
});
