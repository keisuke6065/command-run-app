import React, {Component} from 'react';
import {Route} from 'react-router'
import {Link,Switch} from 'react-router-dom';
import App from './App';
import SettingContainer from './setting/container';
import Logger from './logger/component/logger';
import CommandContainer from './command/container';

export default class Routes extends Component {
  Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

  About = () => (
    <div>
      <h2>About</h2>
    </div>
  );
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to='/setting'>setting</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/home" component={this.Home}/>
          <Route path="/about" component={this.About}/>
          <Route path="/setting" component={SettingContainer}/>
        </Switch>
        <Logger/>
        <CommandContainer/>
      </div>
    )
  }
}

