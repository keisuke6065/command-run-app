import { Action } from './action';

console.log('test');

export default function commandReducer(state = {
  data: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case Action.GET_COMMAND: {
      console.log('reducer');
      return state;
    }
    case Action.SAVE_PATH: {
      const {payload: {data}} = action;
      console.log(data);
      return {...state,data}
    }

    default:
      console.log('reducer');
      return state;
  }
};
