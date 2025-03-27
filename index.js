const readline = require("readline");
const { handleNewItem, deleteItem, updateItem } = require("./inventory.js");
let inventory = {};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNewItemMessage(name, quantity) {
  return `${quantity} de ${name} agregados.`;
}

function getDeletedItemMessage(inventory, name) {
  if (inventory[name]) {
    return `${name} eliminado del inventario.`;
  } else {
    return "Articulo no encontrado.";
  }
}

function getUpdatedItemMessage(inventory, name, quantity) {
  if (inventory[name]) {
    return `${name} actualizado a ${quantity}.`;
  } else {
    return "Articulo no encontrado.";
  }
}

function showMenu() {
  console.log("\nAdministración de inventario");
  console.log("1. Agregar articulo");
  console.log("2. Eliminar articulo");
  console.log("3. Actualizar articulo");
  console.log("4. Ver inventario");
  console.log("5. Salir\n");
  rl.question("Escoge una opcion: ", handleInput);
}

function handleInput(option) {
  switch (option) {
    case "1":
        rl.question("Nombre del articulo: ", (name) => {
            rl.question("Ingresa cantidad: ", (quantity) => {
                inventory = handleNewItem(inventory, name, quantity);
                console.log(getNewItemMessage(name, quantity));
                showMenu();
            });
        });
    break;
    case "2":
      rl.question("Ingresa nombre del articulo a eliminar: ", (name) => {
        const helper = {...inventory};
        inventory = deleteItem(inventory, name);
        console.log(getDeletedItemMessage(helper, name));
        showMenu();
      });
      break;
    case "3":
      rl.question("Ingresa nombre del articulo a actualizar: ", (name) => {
          rl.question("Ingresa la nueva cantidad: ", (quantity) => {
            inventory = updateItem(inventory, name, quantity);
            console.log(getUpdatedItemMessage(inventory, name, quantity));
            showMenu();
          });
      });
      break;
    case "4":
      console.log("\nInventario:");
      console.table(inventory);
      showMenu();
      break;
    default:
      console.log("opcion invalida, try again.");
      showMenu();
  }
}


showMenu();
