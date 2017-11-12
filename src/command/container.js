import React, {Component} from 'react';
import {connect} from 'react-redux';
import Command from './component/command';
import {
  createCommand,
  savePathCommand
} from './action';

class CommandContainer extends Component {

  componentWillMount() {
  }

  handleCommand() {
    this.props.dispatchCreateCommand({'test':'test'});
    this.props.dispatchSavePathCommand();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleCommand()}>dispatch</button>
        <Command/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const dispatchCreateCommand = () => dispatch(createCommand());
  const dispatchSavePathCommand = () => dispatch(savePathCommand());
  return {
    dispatchCreateCommand,
    dispatchSavePathCommand,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandContainer);