import React from 'react';
// import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
// import ModalsLayout from 'containers/ModalsLayout/index';
import NotFound from '../containers/NotFound';
import NavBar from '../components/NavBar';

export class AppLayout extends React.Component {
  // static propTypes = {
  //   loading: PropTypes.bool.isRequired
  // };
  render() {
    return (
      <NavBar>
        <Switch>
          <Route exact path="/" component={() => <h1>首页</h1>} />
          <Route path="/article" component={() => <h1>文章</h1>} />
          <Route path="*" component={NotFound} />
        </Switch>
      </NavBar>
    );
  }
}

export default AppLayout;
