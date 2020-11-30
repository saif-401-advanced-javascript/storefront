/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  products: [
    {
      name: 'TV',
      category: 'electronics',
      price: 699.0,
      inStock: 5,
      image:
        'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_960_720.png'
    },
    {
      name: 'Radio',
      category: 'electronics',
      price: 99.0,
      inStock: 15,
      image:
        'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png'
    },
    {
      name: 'Shirt',
      category: 'clothing',
      price: 9.0,
      inStock: 25,
      image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png'
    },
    {
      name: 'Socks',
      category: 'clothing',
      price: 12.0,
      inStock: 10,
      image:
        'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png'
    },
    {
      name: 'Apples',
      category: 'food',
      price: 0.99,
      inStock: 500,
      image:
        'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png'
    },
    {
      name: 'Eggs',
      category: 'food',
      price: 1.99,
      inStock: 12,
      image:
        'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png'
    },
    {
      name: 'Bread',
      category: 'food',
      price: 2.39,
      inStock: 90,
      image:
        'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png'
    }
  ]
};

// Product Reducer

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVATED':
      let activeProducts = initialState.products.filter(
        (product) => product.category === payload
      );
      return {
        products: activeProducts
      };
    case 'ADD_TO_CART':
      let reducedNumber = state.products.map((product) => {
        if (product.name === payload) {
          product.inStock--;
        }
        return product;
      });
      return {
        products: reducedNumber
      };
    case 'DELETE_FROM_CART':
      let increaseNumber = state.products.map((product) => {
        if (product.name === payload) {
          product.inStock++;
        }
        return product;
      });
      return {
        products: increaseNumber
      };
    default:
      return state;
  }
};
