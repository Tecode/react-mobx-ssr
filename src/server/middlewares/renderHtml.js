import React from 'react';
import fs from 'fs';
import cheerio from 'cheerio';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import allStore from '../../store';
import {Provider} from 'mobx-react';
import Router from '../../router';

export default function(path, req) {
  const router = (
    <Provider {...allStore}>
      <StaticRouter location={req.originalUrl}>
        <Router />
      </StaticRouter>
    </Provider>
  );
  const HTML_TEMPLATE = fs.readFileSync(path).toString();
  const $template = cheerio.load(HTML_TEMPLATE);
  $template('#app').html(renderToString(router));
  console.log(HTML_TEMPLATE, 'HTML_TEMPLATE>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log(1);
  return $template.html();
}
