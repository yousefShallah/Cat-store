import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import data from '/data/products.json';
import { GetProduct, GetProductSuccess, GetProductFailed } from '../reducesrs/product';
// import { GetProduct, GetProductSuccess, GetProductFailed } from '../store/data/products.json';

export function* GetProductAsync(action){
    try{
        yield put({type: GetProductSuccess, response: data})
        // console.log('response', res);
    }catch(e){
        console.log("e.massege", e);
        yield put({type: GetProductFailed, error: e.message})
    }
}
export function* watchFetchProducts() {
    yield takeEvery(GetProduct, GetProductAsync)
}