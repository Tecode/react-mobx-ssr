require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
require.extensions['.less'] = () => {
  return;
};
require('babel-core/register');
require('./src/server');
