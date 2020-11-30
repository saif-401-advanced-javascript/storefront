import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from '../reducers/categories';
import products from '../reducers/products';
import cart from '../reducers/cart';
const reducers = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
