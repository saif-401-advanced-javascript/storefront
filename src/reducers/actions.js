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

export const addToCart = (id, number) => {
  if (number > 0) {
    number--;
    return (dispatch) => {
      return superagent
        .put(`${API_LINK_Products}/${id}`)
        .send({ inStock: number })
        .then((res) => {
          dispatch(
            add({
              id: res.body._id,
              inStock: res.body.inStock
            })
          );
        });
    };
  } else {
    return (dispatch) => {
      return dispatch(
        add({
          id: id,
          inStock: number
        })
      );
    };
  }
};

export const deleteFromCart = (id) => {
  return (dispatch) => {
    return superagent.get(`${API_LINK_Products}/${id}`).then((res) => {
      let inStock = res.body.inStock;
      inStock++;
      superagent
        .put(`${API_LINK_Products}/${id}`)
        .send({ inStock: inStock })
        .then((res) => {
          dispatch(
            deleteCart({
              id: res.body._id,
              inStock: res.body.inStock
            })
          );
        });
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

export const add = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload: payload
  };
};

export const deleteCart = (payload) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: payload
  };
};
