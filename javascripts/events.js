const data = require('./data');
const itemsDom = require('./itemsDom');

const departmentContainerDiv = document.getElementById('dept');
const departmentCards = document.getElementsByClassName('department');

const showDeptName = (e) => {
  // console.log('e',e);
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.remove('hide');
  departmentImg.classList.add('grey-out');
};
const hideDeptName = (e) => {
  // console.log('e',e);
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.add('hide');
  departmentImg.classList.remove('grey-out');
};
const showItem = (e) => {
  const departmentId = e.target.parentNode.childNodes[0].dataset.id;
  console.log('data-id', e.target.parentNode.childNodes[0].dataset.id);
  const selectedItems = data.getItemsByDepartment(departmentId);
  console.log('selectedItems', selectedItems);
  departmentContainerDiv.innerHTML = '';
  itemsDom(selectedItems);
};

const addDeptEvents = (e) => {
  for (let i = 0; i < departmentCards.length; i++) {
    departmentCards[i].addEventListener('mouseenter',showDeptName);
    departmentCards[i].addEventListener('mouseleave',hideDeptName);
    departmentCards[i].addEventListener('click',showItem);
  }
};

module.exports = {
  addDeptEvents,
};
