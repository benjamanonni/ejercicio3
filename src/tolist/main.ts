import type { TareaTipo } from "./contructora";
// Make sure the menu module exists and exports 'menu'
import { menu } from "./menu";


function main(): void {
  const tareas: TareaTipo[] = [];
  menu(tareas);
}

main();
