/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  products: [],
  activatedProducts: []
};

// Product Reducer

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVATED':
      console.log(initialState);
      let activeProducts = initialState.activatedProducts.filter(
        (product) => product.category === payload
      );
      return {
        products: activeProducts
      };
    case 'ADD_TO_CART':
      let reducedNumber = state.products.map((product) => {
        if (product.name === payload) {
          if (product.inStock > 0) {
            product.inStock--;
          }
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

    case 'GET_PRO':
      initialState.activatedProducts = payload;
      return { products: payload };

    default:
      return state;
  }
};
