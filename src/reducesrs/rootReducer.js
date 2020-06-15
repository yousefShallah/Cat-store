import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ProductsReducer from './product';


export default combineReducers({
    router: routerReducer,
    products: ProductsReducer
  });


