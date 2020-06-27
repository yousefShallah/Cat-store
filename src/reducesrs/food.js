// import {createReducer, createAction} from 'redux-act';
// import initialState from './initialstate.js';

// export const GetFoods = createAction('get food');
// export const GetFoodSuccess = createAction('get food success');
// export const GetFoodFailed = createAction('get food failed');

// const FoodsReducer = createReducer({

//     [GetFoods]: (state) => ({ ...state }),
//     [GetFoodSuccess]: (state, payload) => {
//         console.log("payload", payload);
//         return {
//             ...state,
//             data: state.data.concat(payload.food)
//         }
//     },
//     [GetFoodFailed]: (state, payload) => {
//         return {
//             ...state,
//             data: state.data.concat(payload.food)
//         }
//     },
// }, initialState.foods)

// export default FoodsReducer;
