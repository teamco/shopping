import React from 'react';
import 'react-hot-loader/patch';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import '../node_modules/antd/dist/antd.css';

import App from './ui/app';

Meteor.startup(() => {
  ReactDOM.render(
      <App/>,
      document.getElementById('root')
  );
});