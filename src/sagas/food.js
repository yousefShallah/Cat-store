// import { put, call, takeEvery } from 'redux-saga/effects'
// import axios from 'axios';
// import { GetFoods, GetFoodSuccess, GetFoodFailed } from '../reducesrs/food';

// export function* GetFoodAsync(){
//     try{
//         const URL = 'https://www.w3dnetwork.com/api/61010bde7a9cdc8e525e805ed269e2f6.json';
//         const res = yield call(axios.get, URL);
//         console.log("response food", res.data);
//         yield put(GetFoodSuccess(res.data))
//     }catch(e){
//         yield put(GetFoodFailed({error: e.message}))
//         console.log("e.massege", e);
//     }
// }
// export function* watchFetchFood() {
//     yield takeEvery(GetFoods, GetFoodAsync)
// }