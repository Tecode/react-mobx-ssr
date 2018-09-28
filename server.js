const WebpackIsomorphicTools = require('webpack-isomorphic-tools');


// require.extensions['.scss'] = () => {
//   return;
// };
// require.extensions['.css'] = () => {
//   return;
// };
// require.extensions['.less'] = () => {
//   return;
// };
// require.extensions['.png'] = () => {
//   return;
// };


// this must be equal to your Webpack configuration "context" parameter
const dirRoot = require('path').join(process.cwd());

require("@babel/register")({
  "plugins": [
    "dynamic-import-node"
  ]
});

// this global variable will be used later in express middleware
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./config/webpack-isomorphic-tools-configuration'))
// initializes a server-side instance of webpack-isomorphic-tools
// (the first parameter is the base path for your project
//  and is equal to the "context" parameter of you Webpack configuration)
// (if you prefer Promises over callbacks 
//  you can omit the callback parameter
//  and then it will return a Promise instead)
.server(dirRoot, () => { require('./src/server') })
