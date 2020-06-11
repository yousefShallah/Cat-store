import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { GetProduct, GetProductSuccess, GetProductFailed } from '../../reducesrs/product';
import { GetProduct, GetProductSuccess, GetProductFailed } from '../store/data/products.json';

export function* GetProductAsync(action){
    try{
        let url = require('../store/data/products.json');
        const res = yield call(axios.get, `${url}`);
        yield put(GetProductSuccess({ response: res.data }));
        console.log('response', res);
        
    }catch(e){
        console.log("e.massege", e.massege);
        yield put(GetProductFailed({ error: e.message }));
    }
}
export function* watchFetchTemplates() {
    yield takeEvery(GetProduct, GetProductAsync)
}