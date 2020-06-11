import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import productReducer from './product';


export default combineReducers({
    router: routerReducer,
    product: productReducer
  });


