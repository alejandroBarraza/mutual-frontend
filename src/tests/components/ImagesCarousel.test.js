import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { IMAGES, ImagesCarousel } from '../../components/home/imagesCarousel/ImagesCarousel';
import { CircularProgress } from '@material-ui/core';

describe('test in <ImagesCarousel /> component', () => {
   const loading = 'Loading...';
   const mocks = [
      {
         request: {
            query: IMAGES,
            variables: {
            },
         },
         result: {
            data: {
               carrusel: {
                  titulo: "Titulo del Carrusel",
                  descripcion: "Suspendisse potenti. Praesent sed tristique turpis. Aliquam quis ullamcorper nulla, eu dignissim urna. Fusce id quam eget sem pulvinar euismod et vel velit. Cras a sapien sit amet nulla lobortis ultricies. Pellentesque quis risus nec orci tincidunt fringilla. Nulla ut consequat libero, in gravida augue.",
                  imagenes: [
                     {
                        url: "https://res.cloudinary.com/dkfgeruxd/image/upload/v1633210266/IMG_20210917_210700_e0ed0f7c2f.jpg"
                     },
                  ]
               }
            },
         },
      },
   ];

   test('renders loading correctly', () => {
      const { container } = render(
         <MockedProvider mocks={mocks}>
            <ImagesCarousel />
         </MockedProvider>
      );
      const title = JSON.stringify(container.getElementsByTagName('h1').namedItem('titleCarousel').innerHTML);
      const description = JSON.stringify(container.getElementsByTagName('p').namedItem('descriptionCarousel').innerHTML);
      const circle = container.getElementsByTagName('div').namedItem('loading__icon').innerHTML;
      const circularProgress = render(< CircularProgress />).container.innerHTML;

      expect(container).toMatchSnapshot();
      expect(title).toMatch(loading);
      expect(description).toMatch(loading);
      expect(circle).toMatch(circularProgress);
   });

   test('renders loaded correctly', async () => {
      const { container } = render(
         <MockedProvider mocks={mocks}>
            <ImagesCarousel />
         </MockedProvider>
      );
      await waitFor(() => new Promise((res) => setTimeout(res, 0)));

      const title = JSON.stringify(container.getElementsByTagName('h1').namedItem('titleCarousel').innerHTML);
      const description = JSON.stringify(container.getElementsByTagName('p').namedItem('descriptionCarousel').innerHTML);
      const images = container.getElementsByTagName('div').namedItem('gallery__images').innerHTML;
      const circularProgress = render(< CircularProgress />).container.innerHTML;

      expect(container).toMatchSnapshot();
      expect(title).toMatch(mocks[0].result.data.carrusel.titulo);
      expect(description).toMatch(mocks[0].result.data.carrusel.descripcion);
      expect(images).not.toMatch(circularProgress);
   });

   // test('renders loaded with error', async () => {

   //    const error = 'No existen datos disponibles';
   //    const mocks_2 = [
   //       {
   //          request: {
   //             query: IMAGES,
   //          },
   //          error: new Error('No existen datos disponibles')
   //       },
   //    ];

   //    const { container } = render(
   //       <MockedProvider mocks={mocks_2}>
   //          <ImagesCarousel />
   //       </MockedProvider>
   //    );
   //    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

   //    const title = JSON.stringify(container.getElementsByTagName('h1').namedItem('titleCarousel').innerHTML);
   //    const description = JSON.stringify(container.getElementsByTagName('p').namedItem('descriptionCarousel').innerHTML);
   //    const images = container.getElementsByTagName('div').namedItem('gallery__images').innerHTML;
   //    const circularProgress = render(< CircularProgress />).container.innerHTML;

   //    expect(container).toMatchSnapshot();
   //    expect(title).toMatch(error);
   //    expect(images).not.toMatch(circularProgress);
   // });

})


