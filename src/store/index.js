import initialState from '../reducesrs/initialstate';
import configureStore from './store';
import { sagaMiddleware } from './store';
import rootSaga from '../sagas'

const store = configureStore(initialState);
sagaMiddleware.run(rootSaga);
export default store;