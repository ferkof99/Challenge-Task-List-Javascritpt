var scanf = require('scanf');
var showMenu = require('./src/app');

var TaskList = [];

showMenu();

let choosedOption;
let Out;

do {
  choosedOption = scanf(`%d`);
  Out = choosedOption;

  switch (choosedOption) {
    case 1:
      console.log(`Crear tarea`);
      let Task = scanf(`%s`);

      let MyTasks = {};
      MyTasks[`Task`] = Task;
      TaskList.push(MyTasks);
      console.log();
      console.log();
      showMenu();

      console.log();
      console.log(`Escoge otra opción`);
      break;

    case 2:
      console.log();
      console.log(`Escoge otra opción`);
      console.log();
      console.log();
      showMenu();

      console.log();
      console.log(`-- Mi lista de tareas --`);
      console.log();
      TaskList.forEach((TaskList, index) => { console.log(`${index + 1}: ${TaskList.Task}`) });
      console.log();
      console.log(`Escoge otra opción`);
      break;

    case 3:
      console.log()
      console.log(`Digite la tarea que desea actualizar:`);
      let findTaskByName = scanf(`%s`);
      let foundtask = TaskList.findIndex(element => element.Task.toLowerCase().includes(findTaskByName.toLowerCase()));

      console.log(`el elemento ${findTaskByName} el indice es ${foundtask}`);
      console.log(`digite nuevo elemento`);
      let getNewTaskName = scanf(`%s`);
      TaskList[foundtask].Task = getNewTaskName;
      console.log(`Escoge otra opción`);
      break;

    case 4:
      console.log(`Digite la tarea que desea eliminar`);
      let findTask = scanf(`%s`);

      let indexFound = TaskList.findIndex(element => element.Task.toLocaleLowerCase().includes(findTask));
      TaskList.splice(indexFound, 1);
      break;

    default:
      console.log(`Saliste de la app`)
      break;
  }

} while (Out !== 5);





