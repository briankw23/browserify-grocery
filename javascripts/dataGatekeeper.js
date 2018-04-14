const http = require('./departments');
const cardBuilder = require('./deptDom');
const data = require('./data');

const successXhr = function () {
  const data = JSON.parse(this.responseText).departments;
  // data.setDepartments(data);
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
