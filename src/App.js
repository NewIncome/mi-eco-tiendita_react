import Main from './pages/Main';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Jabones from './pages/Jabones';
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
        element: <Jabones jabones={getProductsList('jabones')}/>,
        children: []
      },
      {
        path: '/jabones/:prodPath',
        element: <Product />,
        loader: async ({ params }) => 
                        getProductsList('jabones')
                        .filter(e => e.path == params.prodPath)[0]
      }/*,
      {
        path: 'velas',
        element: <Velas />,
      },
      {
        path: 'cremas',
        element: <Cremas />,
      },
      {
        path: 'materiales',
        element: <Materiales />,
      }*/
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
