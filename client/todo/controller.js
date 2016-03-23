export const dependencies = ["todoData"];

export class TodoController {
  /*
  function shorthand when defining an object or class, constructor: function() {} equals constructor(){}
  the ({allTodos}) {} is another ec6 shorthand and spreads an obejct provided as an argument to variables
  its like
  constructor(args) { var allTodos = args.allTodos;}
  */
  constructor({allTodos}) { 
    this.allTodos = allTodos;
  }
}
// ...dependencies is the ec6 spread operator, it concats the array with whatever is following
//  [...dependencies, TodoController] equals dependencies.concat([TodoController])
export const controller = [...dependencies, TodoController];


/*

thats how this export statement would look in commonJS

module.export = {
  constroller: [...dependencies, TodoController],
  TodoController: class TodoController {
    constructor({allTodos}) {
      this.allTodos = allTodos;
    }
  },
  dependencies:  ["todoData"]
  
}

["todoData", TodoController];
*/