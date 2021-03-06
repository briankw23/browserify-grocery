let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};
const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};
const setItems = (itemsData) => {
  items = itemsData;
};
const getItems = () => {
  return items;
};
const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const getCart = () => {
  return cart;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  console.log('itemPosition', items[itemPosition]);
  console.log('newItem', newItem);
  cart.push(newItem);
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
  setCart,
  getCart,
};
