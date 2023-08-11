const getProductsList = type => products[type];

const products = {
  'jabones': [
    {
      name: 'Jabón 1',
      img: './assets/products/jabones/..',
      price: 0.0,
      description: 'Ésta es la descripción del jabón no.1'
    },
    {
      name: 'Jabón 2',
      img: './assets/products/jabones/..',
      price: 0.0,
      description: 'Ésta es la descripción del jabón no.2'
    },
    {
      name: 'Jabón 3',
      img: './assets/products/jabones/..',
      price: 0.0,
      description: 'Ésta es la descripción del jabón no.3'
    }
  ]
};

export default getProductsList;
