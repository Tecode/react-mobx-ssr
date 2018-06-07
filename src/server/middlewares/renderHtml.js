import React from 'react';
import fs from 'fs';
import {Helmet} from 'react-helmet';
import cheerio from 'cheerio';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Router from '../../router';
import allStore from '../../store';

export default function(path, req) {
  const router = (
    <Provider {...allStore}>
      <StaticRouter location={req.originalUrl}>
        <Router />
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  const HTML_TEMPLATE = fs.readFileSync(path).toString();
  const $template = cheerio.load(HTML_TEMPLATE);
  $template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());
  $template('#app').html(renderToString(router));
  $template('#app').after(`<script>console.log('ok')</script>`);
  console.log($template.html(), 'HTML_TEMPLATE>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  return $template.html();
}
