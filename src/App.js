import Main from './pages/Main';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';
import Product from './components/Product';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { getProductsList, getProdsRandom, PRODUCTS } from './products';

const router = createHashRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/catalogo',
        element: <Catalog productsList={PRODUCTS} />
      },
      {
        path: '/contacto',
        element: <Contact />
      },
      {
        path: '/jabones',
        element: <Products title={'jabones'} products={getProductsList('jabones')} />
      },
      {
        path: '/jabones/:prodPath',
        element: <Product />,
        loader: async ({ params }) => {
          let product = getProductsList('jabones')
          .filter(e => e.path == params.prodPath)[0];
          return [product, getProdsRandom(product)];
        }
      },
      {
        path: '/shampoos',
        element: <Products title={'shampoos'} products={getProductsList('shampoos')} />
      },
      {
        path: '/shampoos/:prodPath',
        element: <Product />,
        loader: async ({ params }) => {
          let product = getProductsList('shampoos')
          .filter(e => e.path == params.prodPath)[0];
          return [product, getProdsRandom(product)];
        }
      },
      {
        path: '/velas',
        element: <Products title={'velas'} products={getProductsList('velas')} />
      },
      {
        path: '/velas/:prodPath',
        element: <Product />,
        loader: async ({ params }) => {
          let product = getProductsList('velas')
          .filter(e => e.path == params.prodPath)[0];
          return [product, getProdsRandom(product)];
        }
      },
      {
        path: '/balsamos',
        element: <Products title={'balsamos'} products={getProductsList('balsamos')} />
      },
      {
        path: '/balsamos/:prodPath',
        element: <Product />,
        loader: async ({ params }) => {
          let product = getProductsList('balsamos')
          .filter(e => e.path == params.prodPath)[0];
          return [product, getProdsRandom(product)];
        }
      },
      {
        path: '/materiales',
        element: <Products title={'materiales'} products={getProductsList('materiales')} />
      },
      {
        path: '/materiales/:prodPath',
        element: <Product />,
        loader: async ({ params }) => {
          let product = getProductsList('materiales')
          .filter(e => e.path == params.prodPath)[0];
          return [product, getProdsRandom(product)];
        }
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
