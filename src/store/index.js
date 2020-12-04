import { createStore, combineReducers, applyMiddleware } from 'redux';
import categories from '../reducers/categories';
import products from '../reducers/products';
import cart from '../reducers/cart';
import thunk from 'redux-thunk';

const reducers = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
