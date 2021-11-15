import { render, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@wojtekmaj/enzyme-adapter-react-17';
import { GET_ALL_FOOTER } from '../../Graphql/Queries';
import { Footer } from '../../components/home/footer/Footer';

afterEach(cleanup);

const mocks = [
    {
        request: {
            query: GET_ALL_FOOTER,
        },
        result: {
            data: {
                footer: {
                    selloSeguridad: '© copyright 2021 | Mutual-UCN',
                    descripcion:
                        'Nacimos para dar seguridad, salud y protección a los trabajadores, trascendemos aportando al progreso de Chile',
                    instagram: 'https://www.instagram.com',
                    facebook: 'https://www.facebook.com',
                    youtube: 'https://www.youtube.com',
                    twitter: 'https://www.twitter.com',
                },
            },
        },
    },
];

const mocksError = [
    {
        request: {
            query: GET_ALL_FOOTER,
            variables: {},
        },
        error: new Error('An error occurred'),
    },
];

describe('Testing <Footer/> component at error,loading and data fetched states.', () => {
    it('should render <Loading/> before graphql promise get resolved.', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Footer />
            </MockedProvider>
        );

        //select loading component root class.
        const loading = container.querySelector('.MuiCircularProgress-root');
        expect(loading).toBeInTheDocument();
    });

    it('should render the Error ui component in Error Fetch Data', async () => {
        const { container } = render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <Footer />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        const error = container.querySelector('.container-error');
        expect(error).toMatchSnapshot();
    });

    it('should match <Footer/> component with Snaphshot', async () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Footer />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        expect(container).toMatchSnapshot();
    });
});
