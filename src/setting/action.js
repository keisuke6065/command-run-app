import {createActions} from 'redux-actions';
import {keyValueIdentity} from '../util/actionUtil';

export const Action = {
  SAVE_PATH: 'SAVE_PATH',
  EDIT_PATH: 'EDIT_PATH',
};

const {
  savePath,
  editPath,
} = createActions({
  [Action.SAVE_PATH]: keyValueIdentity,
  [Action.EDIT_PATH]: keyValueIdentity
});

export const savePathAction = (path) => {
  console.log(path);
  return (dispatch, getState) => {
    console.log(path);
    dispatch(savePath('data', path));
    return 'hoge';
  }
};
export const editPathAction = (path) => {
  return (dispatch, getState) => {
    dispatch(savePath('data', path));
  }
};