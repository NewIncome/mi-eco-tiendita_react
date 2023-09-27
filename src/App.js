import Main from './pages/Main';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';
import Product from './components/Product';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import getProductsList from './products';

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
        path: '/jabones',
        element: <Products title={'jabones'} products={getProductsList('jabones')} />
      },
      {
        path: '/jabones/:prodPath',
        element: <Product />,
        loader: async ({ params }) => 
                        getProductsList('jabones')
                        .filter(e => e.path == params.prodPath)[0]
      },
      {
        path: '/shampoos',
        element: <Products title={'shampoos'} products={getProductsList('shampoos')} />
      },
      {
        path: '/shampoos/:prodPath',
        element: <Product />,
        loader: async ({ params }) => 
                        getProductsList('shampoos')
                        .filter(e => e.path == params.prodPath)[0]
      },
      {
        path: '/velas',
        element: <Products title={'velas'} products={getProductsList('velas')} />
      },
      {
        path: '/velas/:prodPath',
        element: <Product />,
        loader: async ({ params }) => 
                        getProductsList('velas')
                        .filter(e => e.path == params.prodPath)[0]
      },
      {
        path: '/balsamos',
        element: <Products title={'balsamos'} products={getProductsList('balsamos')} />
      },
      {
        path: '/balsamos/:prodPath',
        element: <Product />,
        loader: async ({ params }) => 
                        getProductsList('balsamos')
                        .filter(e => e.path == params.prodPath)[0]
      },
      {
        path: '/materiales',
        element: <Products title={'materiales'} products={getProductsList('materiales')} />
      },
      {
        path: '/materiales/:prodPath',
        element: <Product />,
        loader: async ({ params }) => 
                        getProductsList('materiales')
                        .filter(e => e.path == params.prodPath)[0]
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
