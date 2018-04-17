const events = require('./events');
const outPutDivDept = document.getElementById('dept');

const cardBuilder = (data) => {
  console.log('dom.js',data);
  let domString = '';
  for (let i = 0; i < data.length; i++) {
    domString += `<div class='col-sm-3 department'>`;
    domString += `<h3 class='hide department-title' data-id=${data[i].id}>${data[i].name}</h3>`;
    domString += `<img class='department-image' src='${data[i].img}'>`;
    domString += `</div>`;
  }
  // console.log(domString);
  printToDom(domString);
};
const printToDom = (domString) => {
  outPutDivDept.innerHTML = domString;
  events.addDeptEvents();
};
module.exports = cardBuilder;
