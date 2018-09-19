import express from 'express';
import bodyParser from 'body-parser';
import Loadable from 'react-loadable';
import setupApiRoutes from './middlewares/api';
import logger from './logger';
import development from './middlewares/development';
import production from './middlewares/production';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const HTTP_PORT = process.env.HTTP_PORT || 3001;

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e); //eslint-disable-line no-console
    console.log('APPLICATION ERROR:', err); //eslint-disable-line no-console
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const setupAppRoutes = process.env.NODE_ENV === 'development' ? development : production;

const app = express();

app.set('env', process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);

app.use(logger.expressMiddleware);
app.use(bodyParser.json());

// application routes
setupApiRoutes(app);
setupAppRoutes(app);

if (HTTP_PORT) {
  Loadable.preloadAll().then(() => {
    app.listen(HTTP_PORT, function() {
      logger.info(`HTTP server is now running on http://localhost:${HTTP_PORT}`);
    });
  });
} else {
  global.console.error(
    '==> 😭  OMG!!! No PORT environment variable has been specified'
  );
}
