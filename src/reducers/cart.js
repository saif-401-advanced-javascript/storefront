/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  cartList: []
};

// Reducer

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      let addItem = [...state.cartList];
      let alreadyThere = addItem.filter((product) => product.name === payload);
      if (alreadyThere.length) {
        let increaseNumber = addItem.map((product) => {
          if (product.name === payload) {
            product.count++;
          }
          return product;
        });
        return { cartList: increaseNumber };
      } else {
        addItem.push({ name: payload, count: 1 });
      }
      return {
        cartList: addItem
      };
    case 'DELETE_FROM_CART':
      let removedItem = [...state.cartList];
      let decreaseNumber = removedItem.reduce((acc, product) => {
        if (product.name === payload) {
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
        cartList: decreaseNumber
      };

    default:
      return state;
  }
};
