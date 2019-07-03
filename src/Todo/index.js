import React, { Component } from 'react';

export default class Index extends Component {
  state = {
    todoText: '',
    todoList: []
  };

  changeText = event => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const { todoText, todoList } = this.state;
    this.setState({
      todoList: [
        ...todoList,
        {
          id: todoList.length + 1,
          text: todoText,
          isDone: false
        }
      ],
      todoText: ''
    });
  };

  markDone = item => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === item.id);
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        { ...item, isDone: !item.isDone },
        ...todoList.slice(index + 1)
      ]
    });
  };

  deleteTodo = todo => {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter(x => x.id !== todo.id)
    }));

    // this.setState(state => {
    //   return {
    //     todoList: state.todoList.filter(x => x.id !== todo.id)
    //   };
    // });
  };

  render() {
    const { todoText, todoList } = this.state;
    return (
      <>
        <h1>Todo App</h1>

        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Write your TODO here..."
            value={todoText}
            onChange={this.changeText}
          />
          <button type="submit">Add Todo</button>
        </form>

        <div>
          {todoList.map(todoItem => (
            <div key={todoItem.id}>
              <input
                type="checkbox"
                value={todoItem.isDone}
                onClick={() => this.markDone(todoItem)}
              />
              <span
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : 'none'
                }}
              >
                {todoItem.text}
              </span>
              <button type="button" onClick={() => this.deleteTodo(todoItem)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
