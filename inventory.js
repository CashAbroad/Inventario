function handleNewItem(inventory, name, quantity) {
  inventory[name] = (inventory[name] || 0) + parseInt(quantity, 10);
  return inventory;
}

function deleteItem(inventory, name) {
  if (inventory.hasOwnProperty(name)) {
    delete inventory[name];
  }
  return inventory;
}

function updateItem(inventory, name, quantity) {
  if (!inventory.hasOwnProperty(name)) {
    return inventory;
  }
  inventory[name] = parseInt(quantity, 10);
  return inventory;
}

exports.updateItem = updateItem;
exports.handleNewItem = handleNewItem;
exports.deleteItem = deleteItem;