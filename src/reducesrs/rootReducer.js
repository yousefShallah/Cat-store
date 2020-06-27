import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ProductsReducer from './product';
import FoodsReducer from './food'


export default combineReducers({
    router: routerReducer,
    products: ProductsReducer,
    foods :FoodsReducer
  });


