/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  products: [],
  cartList: []
};

// Reducer

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      let addItem = [...state.cartList];
      let item = state.products.filter(
        (product) => product._id === payload.id
      )[0];
      let alreadyThere = addItem.filter((product) => product.id === payload.id);
      if (alreadyThere.length) {
        let increaseNumber = addItem.map((product) => {
          if (product.id === payload.id) {
            if (item.inStock + 1 > 0) {
              product.count++;
            }
          }
          return product;
        });
        return {
          products: state.products,
          cartList: increaseNumber
        };
      } else {
        addItem.push({
          name: item.name,
          count: 1,
          id: item._id
        });
      }
      return {
        products: state.products,
        cartList: addItem
      };
    case 'DELETE_FROM_CART':
      let removedItem = [...state.cartList];
      let decreaseNumber = removedItem.reduce((acc, product) => {
        if (product.id === payload.id) {
          if (product.count > 1) {
            product.count--;
            acc.push(product);
          }
        } else {
          acc.push(product);
        }
        return acc;
      }, []);
      return {
        products: state.products,
        cartList: decreaseNumber
      };
    case 'GET_PRO':
      return {
        products: payload,
        cartList: state.cartList
      };

    default:
      return state;
  }
};
