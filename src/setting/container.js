import React, {Component} from 'react';
import {connect} from 'react-redux';
import {savePathAction,editPathAction} from './action';
import Setting from './component/setting';

class SettingContainer extends Component {

  savePath(path) {
    console.log(path);
    this.props.dispatchSavePath(path);
  }

  render() {
    return (
      <Setting
        savePath={this.savePath.bind(this)}
        paths={this.props.data}
      />
    );
  };
}



const mapStateToProps = (state) => {
  console.log(state.setting);
  return state.setting;
};

const mapDispatchToProps = (dispatch) => {
  const dispatchSavePath = (path) => dispatch(savePathAction(path));
  // const dispatchCreateCommand = () => dispatch(createCommand());
  // const dispatchSavePathCommand = () => dispatch(savePathCommand());
  return {
    dispatchSavePath,
    // dispatchCreateCommand,
    // dispatchSavePathCommand,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingContainer);