import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'mobx-react';
import Html from '../../helpers/Html';
import App from '../../router';
import allStore from '../../store';
import { toJS } from 'mobx';

export default function (req) {
  allStore.miniStore = { name: 'PPPPP' };
  const context = {};
  const componentHTML = (
    <Provider {...allStore}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const prepareStore = (store) => {
    const keyArr = Object.keys(allStore);
    const output = {};
    keyArr.forEach((key) => {
      output[key] = toJS(store[key]);
    });
    return output;
  };
  return `${'<!doctype html>\n' +
    '<!-- Polyfills -->\n' +
    '<!--[if lt IE 10]>\n' +
    '<script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"></script>\n' +
    '<script src="https://raw.githubusercontent.com/inexorabletash/polyfill/master/typedarray.js"></script>\n' +
    '<![endif]-->\n' +
    '<!--[if lte IE 11]>\n' +
    '<script src="https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js"></script>\n' +
    '<![endif]-->\n'}${
    renderToStaticMarkup(<Html componentHTML={componentHTML} initData={JSON.stringify(prepareStore(allStore))} />)
    }`;
}
