import _ from "lodash";

export const dependencies = ["todoData", "$stateParams"];

export class TodoController {
  constructor({allTodos}, {todoId}) {
    this.data = _.find(allTodos, {id: todoId});
  }
}

export const controller = [...dependencies, TodoController];