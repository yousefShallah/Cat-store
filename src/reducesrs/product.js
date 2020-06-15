import {createReducer, createAction} from 'redux-act';
import initialState from './initialstate.js';

export const GetProduct = createAction('get product');
export const GetProductSuccess = createAction('get product success');
export const GetProductFailed = createAction('get product failed');

const ProductsReducer = createReducer({

    [GetProduct]: (state) => ({ ...state }),
    [GetProductSuccess]: (state, payload) => {
        return {
            ...state,
            data: state.data.concat(payload.products)
        }
    },
    [GetProductFailed]: (state, payload) => {
        return {
            ...state,
            data: state.data.concat(payload.products)
        }
    },

}, initialState.products)

export default ProductsReducer;
