import React from 'react';
// import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from 'react-router-dom';
// import ModalsLayout from 'containers/ModalsLayout/index';
// import NotFound from 'containers/NotFound';
import NavBar from '../components/NavBar';

export class AppLayout extends React.Component {
  // static propTypes = {
  //   loading: PropTypes.bool.isRequired
  // };
  render() {
    return (
      <Switch>
        <Route exact path="/" component={NavBar} />
        {/*<Route exact path="/users" name="home-users" component={NotFound} />*/}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default AppLayout;
