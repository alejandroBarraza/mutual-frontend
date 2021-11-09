import { render, cleanup, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@wojtekmaj/enzyme-adapter-react-17';
import { GETDOWNLOADS_SORTED_DESC } from '../../Graphql/Queries';
import { Downloads } from '../../components/download/Downloads';

afterEach(cleanup);

const mocks = [
    {
        request: {
            query: GETDOWNLOADS_SORTED_DESC,
        },
        result: {
            data: {
                downloads: [
                    {
                        id: '4',
                        titulo: 'descarga de prueba',
                        descripcion: 'esta es una descarga de prueba de el dia martes.',
                        archivo: {
                            url: 'https://res.cloudinary.com/dkfgeruxd/image/upload/v1635862641/197111763_Certificado_Curricular_05_10_2021_21_47_24_45bc422a2b.pdf',
                        },
                    },
                    {
                        id: '3',
                        titulo: 'choques antofagasta 2',
                        descripcion: '*ejemplo de contenido*',
                        archivo: null,
                    },
                    {
                        id: '2',
                        titulo: 'contenido descargable 1 ',
                        descripcion: 'ejemplo de contenido de descarga 1',
                        archivo: null,
                    },
                ],
            },
        },
    },
];

const mocksError = [
    {
        request: {
            query: GETDOWNLOADS_SORTED_DESC,
        },
        error: new Error('An error occurred'),
    },
];

const mocksEmptyData = [
    {
        request: {
            query: GETDOWNLOADS_SORTED_DESC,
        },
        result: {
            data: {
                downloads: [],
            },
        },
    },
];

describe('Testing <Download/> component at error,loading,empty array and data fetched states.', () => {
    it('should render <Loading/> before graphql promise get resolved.', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Downloads />
            </MockedProvider>
        );

        //select loading component root class.
        const loading = container.querySelector('.MuiCircularProgress-root');
        expect(loading).toBeInTheDocument();
    });

    it('should render the Error ui component in Error Fetch Data', async () => {
        const { container } = render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <Downloads />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        const error = container.querySelector('.container-error');
        expect(error).toMatchSnapshot();
    });

    it('should render "<no hay contenido descargable>" when data array is empty ', async () => {
        render(
            <MockedProvider mocks={mocksEmptyData} addTypename={false}>
                <Downloads />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        const element = screen.getByTestId('no-content');
        console.log(element);
        expect(element).toBeInTheDocument();
    });
});
