/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  categories: [],
  activeProduct: 'food'
};

// Reducer

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVATED':
      return {
        categories: state.categories,
        activeProduct: payload
      };
    case 'GET_CATE':
      return {
        categories: payload,
        activeProduct: initialState.activeProduct
      };

    default:
      return state;
  }
};
