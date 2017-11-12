import React, {Component} from 'react';
import {execSync} from 'child_process';

export default class Command extends Component {


  ls() {
    console.log(execSync('ls -al').toString());
  }
  // tail() {
  //   console.log(execSync('tail -f').toString());
  // }
  pwd() {
    console.log(execSync('pwd').toString());
  }

  render() {
    return (
      <div>
        <button onClick={() => this.ls()}>ls</button>
        <button onClick={() => this.pwd()}>pwd</button>
      </div>
    )
  }
}