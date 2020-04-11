import {hot} from 'react-hot-loader';
import React, {Component} from 'react';
import {DatePicker} from 'antd';

class App extends Component {
  render() {
    return (
        <div>
          Hello World
          <DatePicker/>
        </div>
    );
  }
}

export default hot(module)(App);