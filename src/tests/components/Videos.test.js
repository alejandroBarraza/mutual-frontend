afterEach(cleanup);
import { render, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GETVIDEOS } from '../../Graphql/Queries';
import { Video } from '../../components/videos/Video';
import { youtube_parser } from '../../helpers/youtubeParser';
import '@wojtekmaj/enzyme-adapter-react-17';

const mocks = [
    {
        request: {
            query: GETVIDEOS,
            variables: { id: null },
        },
        result: {
            data: {
                videos: [
                    {
                        created_at: '2021-10-13T17:36:55.714Z',
                        descripcion: 'mutual',
                        links: 'https://www.youtube.com/watch?v=NrO0CJCbYLA',
                        titulo: 'mutual lo mejor de chile',
                    },
                ],
            },
        },
    },
];

const mocksError = [
    {
        request: {
            query: GETVIDEOS,
            variables: { id: null },
        },
        error: new Error('An error occurred'),
    },
];

describe('Testing <Videos/> component at error,loading and data fetched states.', () => {
    it('should render <Loading/> before graphql promise get resolved.', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Video />
            </MockedProvider>
        );

        //select loading component root class.
        const loading = container.querySelector('.MuiCircularProgress-root');
        expect(loading).toBeInTheDocument();
    });

    it('should render the Error ui component in Error Fetch Data', async () => {
        const { container } = render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <Video />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        const error = container.querySelector('.container-error');
        console.log(error.innerHTML);
        expect(error).toMatchSnapshot();
    });

    it('should match <Video/> component with Snaphshot', async () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Video />
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        expect(container).toMatchSnapshot();
    });

    it('should check if function youtoube Parse work properly given a youtube url.', () => {
        const url = youtube_parser('https://www.youtube.com/watch?v=aXzEmJs6_Qk');
        console.log(url);
        expect(url).toBe('aXzEmJs6_Qk');
    });
});
