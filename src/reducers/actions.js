export const activate = (name) => {
  return {
    type: 'ACTIVATED',
    payload: name
  };
};

export const addToCart = (name) => {
  return {
    type: 'ADD_TO_CART',
    payload: name
  };
};

export const deleteFromCart = (name) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: name
  };
};
