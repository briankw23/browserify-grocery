const http = require('./departments');

const successXhr = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departmnet',data);
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
