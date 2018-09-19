import {resolve} from 'path';
import express from 'express';
import compression from 'compression';
import renderHtml from './renderHtml';

const clientBuildPath = resolve(__dirname, '..', '..', '..', 'build');

export default function(app) {
  app.use(compression());
  app.use('/', express.static(clientBuildPath));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => {
    res.status('200');
    res.send(renderHtml(resolve(clientBuildPath, 'server.html'), req));
  });
}
