import { cleanup, render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { NewsById } from '../../components/news/NewsById';
import { GETNEWSBYID, GETNEWS_START_LIMIT } from '../../Graphql/Queries';
import { CircularProgress } from '@mui/material';
import { MemoryRouter, Route } from "react-router-dom";
import { Loading } from '../../components/utils/Loading';
const mocks = [
   {
      request: {
         query: GETNEWS_START_LIMIT,
         variables: {
            start: parseInt(0),
            limit: parseInt(3),
         },
      },
      result: {
         data: {
            news: [
               {
                  id: '3',
                  titulo: 'notica de prueba 1',
                  descripcion: 'la mejor noticia 1',
                  tiempoLectura: 1,
                  imagen: [
                     {
                        url: 'https://res.cloudinary.com/dkfgeruxd/image/upload/v1632330012/arquitectura_drawio_735b384d8f.png',
                     },
                  ]
               },
            ]
         },
      },
   },
   {
      request: {
         query: GETNEWSBYID,
         variables: { new: parseInt("1") }
      },
      result: {
         data: {
            news: [
               {
                  titulo: "Titulo 1 Para la resistencia de los que nunca calleron a la parte donde los caidos deberian haber caido.",
                  cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci orci, hendrerit sit amet odio ut, fermentum vestibulum arcu. Nulla finibus blandit ligula ut porta. Nam urna nulla, consectetur sed odio ut, condimentum pharetra enim. Donec congue sagittis tortor et euismod. Vestibulum rhoncus lacinia condimentum. Aliquam volutpat, tortor ut imperdiet hendrerit, orci mauris sollicitudin dolor, eget suscipit urna orci vitae nisi. Quisque rutrum accumsan nulla ac faucibus. Maecenas sapien dui, interdum id scelerisque id, pretium a arcu. Donec eget lorem molestie, auctor elit a, venenatis urna. Proin vestibulum commodo tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n![nb14lkc3leo61.jpg](https://res.cloudinary.com/dkfgeruxd/image/upload/v1635816052/nb14lkc3leo61_71cb0e4fc8.jpg)\n\n\n## Hola esto es un titulo\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci orci, hendrerit sit amet odio ut, fermentum vestibulum arcu. Nulla finibus blandit ligula ut porta. Nam urna nulla, consectetur sed odio ut, condimentum pharetra enim. Donec congue sagittis tortor et euismod. Vestibulum rhoncus lacinia condimentum. Aliquam volutpat, tortor ut imperdiet hendrerit, orci mauris sollicitudin dolor, eget suscipit urna orci vitae nisi. Quisque rutrum accumsan nulla ac faucibus. Maecenas sapien dui, interdum id scelerisque id, pretium a arcu. Donec eget lorem molestie, auctor elit a, venenatis urna. Proin vestibulum commodo tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\n![IMG_20210917_210700.jpg](https://res.cloudinary.com/dkfgeruxd/image/upload/v1633210266/IMG_20210917_210700_e0ed0f7c2f.jpg)\n\nBueno n ose puede hacer m as por la rec sajdkasjd [text](link)",
                  imagenDePresentacion: null
               }
            ]
         },
      },
   },
];
afterEach(cleanup);
describe('test in <NewsById /> component', () => {
   test('renders loading correctly', () => {
      const { container } = render(
         <MockedProvider mocks={mocks} addTypename={false}>
            <MemoryRouter initialEntries={["/noticias/0"]}>
               <NewsById />
            </MemoryRouter>
         </MockedProvider>
      );
      const loading = container.querySelector('.MuiCircularProgress-root');
      expect(loading).toMatchSnapshot();
   });

   test('renders loaded correctly', async () => {
      const newId = 1;
      const { container } = render(
         <MockedProvider mocks={mocks} addTypename={false}>
            <MemoryRouter initialEntries={[`/noticias/${newId}`]}>
               <Route path="/noticias/:newId">
                  <NewsById />
               </Route>
            </MemoryRouter>

         </MockedProvider >
      );
      await waitFor(() => new Promise((res) => setTimeout(res, 0)));

      //    const title = JSON.stringify(container.getElementsByTagName('h1').namedItem('titleCarousel').innerHTML);
      //    const description = JSON.stringify(container.getElementsByTagName('p').namedItem('descriptionCarousel').innerHTML);
      //    const images = container.getElementsByTagName('div').namedItem('gallery__images').innerHTML;
      //    const circularProgress = render(< CircularProgress />).container.innerHTML;

      expect(container).toMatchSnapshot();
      //    expect(title).toMatch(mocks[0].result.data.carrusel.titulo);
      //    expect(description).toMatch(mocks[0].result.data.carrusel.descripcion);
      //    expect(images).not.toMatch(circularProgress);
   });

   // test('renders loaded with error', async () => {

   //    const error = 'Error en la base de datos';
   //    const mocks_2 = [
   //       {
   //          request: {
   //             query: IMAGES,
   //          },
   //          error: new Error('An error occurred')
   //       },
   //    ];

   //    const component = render(
   //       <MockedProvider mocks={mocks_2}>
   //          <ImagesCarousel />
   //       </MockedProvider>
   //    );
   //    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
   //    const container = component.container;
   //    const error_data = JSON.stringify(container.innerHTML);
   //    expect(error_data).toContain(error);
   //    expect(container).toMatchSnapshot();
   // });

})
