const http = require('./departments');
const http2 = require('./items');
const cardBuilder = require('./deptDom');
const data = require('./data');

const successXhr = function () {
  const dataDept = JSON.parse(this.responseText).departments;
  data.setDepartments(dataDept);
  cardBuilder(dataDept);

};

const failXhrItems = function () {
  console.error('epic fail');
};
const successXhrItems = function () {
  const dataItems = JSON.parse(this.responseText).items;

  console.log('items',data);
  data.setItems(dataItems);
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
