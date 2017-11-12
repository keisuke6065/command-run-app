import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import commandReducer from './command/reducer';
import settingReducer from './setting/reducer';

const rootReducer = combineReducers({
  command: commandReducer,
  setting: settingReducer,
  routing: routerReducer,
});

export default rootReducer;