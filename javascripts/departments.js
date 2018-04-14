const http = (suucessXhr, failXhr) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', suucessXhr);
  myRequest.addEventListener('error', failXhr);
  myRequest.open('GET', '../db/departments.json');
  myRequest.send();
};

module.exports = http;
