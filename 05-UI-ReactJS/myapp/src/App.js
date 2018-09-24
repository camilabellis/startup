import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoStore from './store/TodoStore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.show(),
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header text-center">
              <h3>{todo.title}</h3>
            </div>
            <div className="card-body">
              <p>{todo.year}</p>
              <p>{todo.genre}</p>
            </div>
            <div className="card-footer">
              <div className="row">
                <button className="btn col-md-4">
                Edit
                </button>
                <div className="col-md-4"></div>
                <button className="btn btn-danger col-md-4" onClick={this.removeTodo.bind(this, i)}>
                Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
          Movies
          <span className="badge badge-pill badge-light ml-2">
          {this.state.todos.length}
          </span>
          </a>
        </nav>

        <div className="container">
          <div className="mt-4">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center">
              Add a movie
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
              </div>
            </div>
            <div className="col-md-12 mt-2">
              <div className="row">
              {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
