import { all } from 'redux-saga/effects';

import { watchFetchProducts } from './product';
// import { watchFetchFood } from './food';

export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
        // watchFetchFood()
      ]);
}