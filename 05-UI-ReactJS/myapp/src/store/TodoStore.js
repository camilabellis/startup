import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [];
  }

  show() {
    return this.todos;
  }
}

const todoStore = new TodoStore;

export default todoStore;