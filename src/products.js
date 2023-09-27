import material from './assets/var-02.jpeg';
import jabon from './assets/var-03.jpeg';
import balsamo from './assets/var-04.jpeg';
import vela from './assets/var-05.jpg';
import shampoo from './assets/var-07.jpg';
import { pathname_fix } from './utils';

const getProductsList = type => products[type];

const lorem_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const products = {
  'jabones': [
    {
      name: 'Jabón 1',
      img: jabon,
      price: 50.00,
      description: ['Ésta es la descripción del jabón no.1'+lorem_description, lorem_description],
      path: pathname_fix('Jabón 1')
    },
    {
      name: 'Jabón 2',
      img: jabon,
      price: 50.00,
      description: ['Ésta es la descripción del jabón no.2'+lorem_description, lorem_description],
      path: pathname_fix('Jabón 2')
    },
    {
      name: 'Jabón 3',
      img: jabon,
      price: 50.00,
      description: ['Ésta es la descripción del jabón no.3'+lorem_description, lorem_description],
      path: pathname_fix('Jabón 3')
    }
  ],
  'shampoos': [
    {
      name: 'Shampoo 1',
      img: shampoo,
      price: 100.00,
      description: ['Ésta es la descripción del shampoo no.1'+lorem_description, lorem_description],
      path: pathname_fix('Shampoo 1')
    },
    {
      name: 'Shampoo 2',
      img: shampoo,
      price: 100.00,
      description: ['Ésta es la descripción del shampoo no.2'+lorem_description, lorem_description],
      path: pathname_fix('Shampoo 2')
    },
    {
      name: 'Shampoo 3',
      img: shampoo,
      price: 100.00,
      description: ['Ésta es la descripción del shampoo no.3'+lorem_description, lorem_description],
      path: pathname_fix('Shampoo 3')
    }
  ],
  'velas': [
    {
      name: 'Vela 1',
      img: vela,
      price: 65.00,
      description: ['Ésta es la descripción del vela no.1'+lorem_description, lorem_description],
      path: pathname_fix('Vela 1')
    },
    {
      name: 'Vela 2',
      img: vela,
      price: 65.00,
      description: ['Ésta es la descripción del vela no.2'+lorem_description, lorem_description],
      path: pathname_fix('Vela 2')
    },
    {
      name: 'Vela 3',
      img: vela,
      price: 65.00,
      description: ['Ésta es la descripción del vela no.3'+lorem_description, lorem_description],
      path: pathname_fix('Vela 3')
    }
  ],
  'balsamos': [
    {
      name: 'Balsamo 1',
      img: balsamo,
      price: 105.00,
      description: ['Ésta es la descripción del balsamo no.1'+lorem_description, lorem_description],
      path: pathname_fix('Balsamo 1')
    },
    {
      name: 'Balsamo 2',
      img: balsamo,
      price: 105.00,
      description: ['Ésta es la descripción del balsamo no.2'+lorem_description, lorem_description],
      path: pathname_fix('Balsamo 2')
    },
    {
      name: 'Balsamo 3',
      img: balsamo,
      price: 105.00,
      description: ['Ésta es la descripción del balsamo no.3'+lorem_description, lorem_description],
      path: pathname_fix('Balsamo 3')
    }
  ],
  'materiales': [
    {
      name: 'Material 1',
      img: material,
      price: 80.00,
      description: ['Ésta es la descripción del material no.1'+lorem_description, lorem_description],
      path: pathname_fix('Material 1')
    },
    {
      name: 'Material 2',
      img: material,
      price: 80.00,
      description: ['Ésta es la descripción del material no.2'+lorem_description, lorem_description],
      path: pathname_fix('Material 2')
    },
    {
      name: 'Material 3',
      img: material,
      price: 80.00,
      description: ['Ésta es la descripción del material no.3'+lorem_description, lorem_description],
      path: pathname_fix('Material 3')
    }
  ]
};

export default getProductsList;
