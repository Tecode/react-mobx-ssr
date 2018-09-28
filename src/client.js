import '@babel/polyfill';
import 'whatwg-fetch';
import Loadable from 'react-loadable';
import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
// import api from 'api/index';
import allStore from './store';
import { Router } from 'react-router-dom';
import App from './App';
import combineServerData from './helpers/combineServer';
import browserHistory from './helpers/history';

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

// api.setEndpoint('/api');
combineServerData(allStore, window.__INITIAL_STATE__);
const renderApp = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider {...allStore}>
        <Router history={browserHistory}>
          <App />
        </Router>
      </Provider>,
      document.getElementById('app')
    )
  });
}

renderApp();