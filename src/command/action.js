import {createActions} from 'redux-actions';
import {keyValueIdentity} from '../util/actionUtil';

export const Action = {
  GET_COMMAND: 'GET_COMMAND',
  ADD_COMMAND: 'ADD_COMMAND',
};


const {
  getCommand,
  addCommand,
} = createActions({
    [Action.GET_COMMAND]: keyValueIdentity,
  },
  Action.ADD_COMMAND
);


export const createCommand = () => {

  // console.log(command('ls -al', 1));
  return (dispatch, getState) => {
    dispatch(addCommand());
    console.log(getState());
    dispatch(getCommand('hoge'));
    return getState();
  }
};

export const savePathCommand = () => {
  return (dispatch, getSate) => {
    dispatch(addCommand('ls -la'));
  }
};