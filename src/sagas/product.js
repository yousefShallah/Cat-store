import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { GetProduct, GetProductSuccess, GetProductFailed } from '../reducesrs/product';
// import { GetProduct, GetProductSuccess, GetProductFailed } from '../store/data/products.json';

export function* GetProductAsync(){
    try{
        const URL = 'https://www.w3dnetwork.com/api/61010bde7a9cdc8e525e805ed269e2f6.json';
        const res = yield call(axios.get, URL);
        console.log("response", res.data);
        
            yield put(GetProductSuccess(res.data))
    }catch(e){
        yield put(GetProductFailed({error: e.message}))
        console.log("e.massege", e);
    }
}
export function* watchFetchProducts() {
    yield takeEvery(GetProduct, GetProductAsync)
}