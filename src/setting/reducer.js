import {handleActions} from 'redux-actions';
import {Action} from './action';

// export default function settingReducer(state = {
//   data: [],
// }, action) {
//   switch (action.type) {
//     case Action.SAVE_PATH: {
//       const {payload: {data}} = action;
//       return {...state,data}
//     }
//     default:
//       console.log('error reducer');
//       return state;
//   }
// }

export default handleActions({
  [Action.SAVE_PATH]: (state, action) => {
    return {
      ...state,
      data: [...state.data, action.payload.data]
    }
  }
}, {data: ['sample']})