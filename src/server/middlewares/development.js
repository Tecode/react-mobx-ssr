import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import logger from '../logger';
import webpackConfig from '../../../config/webpack.config.dev';
import renderHtml from './renderHtml';

const compiler = webpack(webpackConfig);

export default function(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      logger,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => {
    // 同构刷新
    global.webpackIsomorphicTools.refresh();
    res.status('200');
    res.send(renderHtml(req));
  });
}
