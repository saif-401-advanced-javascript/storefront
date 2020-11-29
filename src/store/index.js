import categoryReducer from './state';

const { createStore, combineReducers } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');

const reducers = combineReducers({ category: categoryReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
