import 'babel-polyfill';
import 'whatwg-fetch';
import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import api from 'api/index';
import allStore from './store';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import combineServerData from './helpers/combineServer';
// global styles
import 'antd/dist/antd.less';

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

api.setEndpoint('/api');
combineServerData(allStore, window.__INITIAL_STATE__);
ReactDOM.hydrate(
  <Provider {...allStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
