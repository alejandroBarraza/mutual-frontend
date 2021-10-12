import { render, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GETSTATISTICS } from '../Graphql/Queries';
import { Statistics } from '../components/statistics/Statistics';
import { Loading } from '../components/utils/Loading';

afterEach(cleanup);
const mocks = [
    {
        request: {
            query: GETSTATISTICS,
            variables: { id: null },
        },
        result: {
            data: {
                statistics: [
                    {
                        titulo: '86%',
                        descripcion: 'de Satisfacción en la atención de pacientes',
                        created_at: '2021-10-06T16:13:06.203Z',
                    },
                    {
                        titulo: '54 años',
                        descripcion: 'de Experiencia',
                        created_at: '2021-10-06T16:13:31.594Z',
                    },
                    {
                        titulo: '97.000',
                        descripcion: 'Empresas adheridas',
                        created_at: '2021-10-06T16:13:43.484Z',
                    },
                    {
                        titulo: '2.100.000',
                        descripcion: 'Trabajadores afiliados',
                        created_at: '2021-10-06T16:13:57.339Z',
                    },
                ],
            },
        },
    },
];
const mocksError = [
    {
        request: {
            query: GETSTATISTICS,
            variables: { id: null },
        },
        error: new Error('An error occurred'),
    },
];

describe('Testing <Statistics component />', () => {
    it('should render <Loading/> before graphql promise get resolved.', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Statistics />
            </MockedProvider>
        );

        //select loading component root class.
        const loading = container.querySelector('.MuiCircularProgress-root');
        expect(loading).toBeInTheDocument();
    }),
        it('should match <Statistic/> component with Snaphshot', async () => {
            const { container } = render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Statistics />
                </MockedProvider>
            );
            await waitFor(() => new Promise((res) => setTimeout(res, 0)));
            expect(container).toMatchSnapshot();
        });

    it('should render the Error ui component in Error Fetch Data', async () => {
        const { container } = render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <Statistics />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        const error = container.querySelector('.container-error');
        console.log(error.innerHTML);
        expect(error).toMatchSnapshot();
    });
});
