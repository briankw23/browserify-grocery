const http = require('./departments');
const cardBuilder = require('./dom');

const successXhr = function () {
  const data = JSON.parse(this.responseText).departments;
  cardBuilder(data);
};

const failXhr = function () {
  console.error('epic fail');
};

const initializer = () => {
  http(successXhr, failXhr);
};

module.exports = {
  initializer,
};
