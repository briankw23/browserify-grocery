const http2 = (suucessXhrItems, failXhrItems) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', suucessXhrItems);
  myRequest.addEventListener('error', failXhrItems);
  myRequest.open('GET', '../db/items.json');
  myRequest.send();
};

module.exports = http2;
