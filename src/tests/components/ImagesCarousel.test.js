import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { IMAGES, ImagesCarousel } from '../../components/home/imagesCarousel/ImagesCarousel';

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
                  {
                     url: "https://res.cloudinary.com/dkfgeruxd/image/upload/v1633210264/IMG_20210917_211421_038627f95d.jpg"
                  },
                  {
                     url: "https://res.cloudinary.com/dkfgeruxd/image/upload/v1633210264/IMG_20210917_211411_fa1f6dcd37.jpg"
                  }
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
   expect(container).toMatchSnapshot();
});

test('renders loaded correctly', async () => {
   const { container } = render(
      <MockedProvider mocks={mocks}>
         <ImagesCarousel />
      </MockedProvider>
   );
   await waitFor(() => new Promise((res) => setTimeout(res, 0)));
   expect(container).toMatchSnapshot();
   // const tree = JSON.stringify(container.getElementsByTagName('h1')[0].innerHTML)
   // expect(tree).toMatch(mocks[0].result.data.carrusel.titulo)
});