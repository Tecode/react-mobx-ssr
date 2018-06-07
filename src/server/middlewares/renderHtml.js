import React from 'react';
import fs from 'fs';
import {Helmet} from 'react-helmet';
import cheerio from 'cheerio';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import App from '../../App';
import allStore from '../../store';
import {toJS} from 'mobx';

export default function(path, req) {
  allStore.miniStore = {name: 'PPPPP'};
  const router = (
    <Provider {...allStore}>
      <StaticRouter location={req.originalUrl}>
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
  const helmet = Helmet.renderStatic();
  const HTML_TEMPLATE = fs.readFileSync(path).toString();
  const $template = cheerio.load(HTML_TEMPLATE, {decodeEntities: false});
  $template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());
  $template('#app').html(renderToString(router));
  $template('#app').after(`<script>window.__INITIAL_STATE__ = ${JSON.stringify(prepareStore(allStore))}</script>`);
  return $template.html();
}
