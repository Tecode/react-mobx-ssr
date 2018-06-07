import React from 'react';
import {hot} from 'react-hot-loader';

import Router from './router';

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default hot(module)(App);
