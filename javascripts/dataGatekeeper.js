const http = require('./departments');
const http2 = require('./items');
const cardBuilder = require('./deptDom');
// const data = require('./data');

const successXhr = function () {
  const data = JSON.parse(this.responseText).departments;
  // data.setDepartments(data);
  cardBuilder(data);

};

const failXhrItems = function () {
  console.error('epic fail');
};
const successXhrItems = function () {
  const data = JSON.parse(this.responseText).items;
  // data.setDepartments(data);
  console.log('items',data);
};

const failXhr = function () {
  console.error('epic fail');
};

const initializer = () => {
  http(successXhr, failXhr);
  http2(successXhrItems, failXhrItems);
};

module.exports = {
  initializer,
};
