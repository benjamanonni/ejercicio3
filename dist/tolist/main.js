"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Make sure the menu module exists and exports 'menu'
const menu_1 = require("./menu");
function main() {
    const tareas = [];
    (0, menu_1.menu)(tareas);
}
main();
