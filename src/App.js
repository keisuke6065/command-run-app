import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import logo from './logo.svg';
import {execSync} from 'child_process';
import './App.css';

class App extends Component {

  sh() {
    console.log(execSync('ls -la').toString());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.sh()}>test</button>
        <ReactLoading type={'spinningBubbles'} color={'#444'}/>
      </div>
    );
  }
}

export default App;
