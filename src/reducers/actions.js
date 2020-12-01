import superagent from 'superagent';

const API_LINK_Products = 'http://api-js401.herokuapp.com/api/v1/products';
const API_LINK_Categories = 'http://api-js401.herokuapp.com/api/v1/categories';

export const getCategories = () => {
  return (dispatch) => {
    return superagent.get(API_LINK_Categories).then((res) => {
      dispatch(getCate(res.body.results));
    });
  };
};

export const getProducts = () => {
  return (dispatch) => {
    return superagent.get(API_LINK_Products).then((res) => {
      dispatch(getPro(res.body.results));
    });
  };
};

export const getCate = (payload) => {
  return {
    type: 'GET_CATE',
    payload: payload
  };
};

export const getPro = (payload) => {
  return {
    type: 'GET_PRO',
    payload: payload
  };
};

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
