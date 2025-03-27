const test = require('node:test');
const assert = require('node:assert');

const { handleNewItem } = require('../inventory.js');
let inventory = {};
const newQuantity = 10;
const newItem = 'apples';
inventory = handleNewItem(inventory, newItem, newQuantity);

test("Nuevo articulo fue agregado", () => {
  assert.equal(inventory.hasOwnProperty(newItem), true);
});

test("La cantidad del articulo es correcta", () => {
  assert.equal(inventory[newItem], newQuantity);
});

test("Test que fallará", () => {
  assert.equal(false, true);
});