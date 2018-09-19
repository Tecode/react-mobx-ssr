import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

import Routers from './router';

class App extends Component {
  render() {
    return <Routers />;
  }
}

export default hot(module)(App);
