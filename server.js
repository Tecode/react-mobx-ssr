require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
require.extensions['.less'] = () => {
  return;
};
require.extensions['.png'] = () => {
  return;
};
require("babel-register")({
  "plugins": [
    "dynamic-import-node"
  ]
});
require('./src/server');
