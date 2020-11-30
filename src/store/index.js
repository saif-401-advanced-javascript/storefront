import categoryReducer from './state';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({ category: categoryReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
