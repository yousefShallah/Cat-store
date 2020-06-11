import {createReducer, createAction} from 'redux-act';
import initialState from './initialstate';



export const GetProduct = createAction('get product');
export const GetProductSuccess = createAction('get product success');
export const GetProductFailed = createAction('get product failed');

const ProductsReducer = createReducer({
    [GetProduct]: (state) => ({ ...state }),
    [GetProductSuccess]: (state, payload) => {
        return {
        ...state,
        product: payload.product
        }
    },
    [GetProductFailed]: (state, payload) => {
        return {
        ...state,
        product: payload.product
        }
    },


}, initialState.product)

export default ProductsReducer;
