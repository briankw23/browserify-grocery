const dataGatekeeper = require('./dataGatekeeper');

const goToDepartments = document.getElementById('go-to-departments');
const gotoCart =document.getElementById('go-to-cart');

const departmentsDiv = document.getElementById('dept');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');

const cartButton = () => {
  gotoCart.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    //print to cart dom
  })
};


const departmentsButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    dataGatekeeper.initializer();
  });
};

module.exports = {
  departmentsButton,
  cartButton,
};
