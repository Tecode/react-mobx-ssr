const {resolve} = require('path');
const express = require('express');
const compression = require('compression');
const renderHtml = require('./renderHtml');

const clientBuildPath = resolve(__dirname, '..', '..', 'client');

module.exports = function setup(app) {
  renderHtml(resolve(clientBuildPath, 'index.html'));
  app.use(compression());
  app.use('/', express.static(clientBuildPath));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => res.sendFile(resolve(clientBuildPath, 'index.html')));
};
