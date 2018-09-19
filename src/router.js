import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppLayout from './containers/AppLayout';
import LoginForm from './containers/LoginForm';

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" name="login" component={LoginForm} />
        <Route path="/" name="home" component={AppLayout} />
      </Switch>
    );
  }
}
