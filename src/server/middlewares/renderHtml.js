const fs = require('fs');

module.exports = function(path) {
  const HTML_TEMPLATE = fs.readFileSync(path).toString();
  console.log(HTML_TEMPLATE, 'HTML_TEMPLATE>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log(1);
};
