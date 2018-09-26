import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../containers/NotFound';
import NavBar from '../components/NavBar';
// import Article from '../components/Article';

const Home = Loadable({
  loader: () => import('../components/CssModule' /* webpackChunkName: 'Home' */),
  loading: () => <p>加载中...</p>
});

const Article = Loadable({
  loader: () => import('../components/Article' /* webpackChunkName: 'Article' */),
  loading: () => <p>加载中...</p>
});

export class AppLayout extends React.Component {
  // static propTypes = {
  //   loading: PropTypes.bool.isRequired
  // };
  render() {
    return (
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
          <Route path="*" component={NotFound} />
        </Switch>
      </NavBar>
    );
  }
}

export default AppLayout;
