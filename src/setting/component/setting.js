import React, {Component} from 'react';

export default class Setting extends Component {

  handleSavePath() {
    this.props.savePath('ls -la')
  }

  renderPathLists(paths) {
    if (paths.length > 0) {
      return paths.map((path, index) => (
        <li id={index} style={{borderBottom: '1px solid #ededed'}}>
          {path}
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <p onClick={() => this.handleSavePath()}>save path</p>
        <p>save sh path</p>
        <p>edit setting</p>
        <ul>
          {this.renderPathLists(this.props.paths)}
        </ul>
      </div>
    )
  }
}