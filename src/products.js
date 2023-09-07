import image from './assets/var-05.jpg';
import { pathname_fix } from './utils';

const getProductsList = type => products[type];

const lorem_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const products = {
  'jabones': [
    {
      name: 'Jabón 1',
      img: image,
      price: 10.55,
      description: ['Ésta es la descripción del jabón no.1'+lorem_description, lorem_description],
      path: pathname_fix('Jabón 1')
    },
    {
      name: 'Jabón 2',
      img: image,
      price: 10.55,
      description: ['Ésta es la descripción del jabón no.2'+lorem_description, lorem_description],
      path: pathname_fix('Jabón 2')
    },
    {
      name: 'Jabón 3',
      img: image,
      price: 10.55,
      description: ['Ésta es la descripción del jabón no.3'+lorem_description, lorem_description],
      path: pathname_fix('Jabón 3')
    }
  ]
};

export default getProductsList;
