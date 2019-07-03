import React, { Component } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoStatus from './todoStatus';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todoList: [],
      status: 'all',
      error: false,
      updatingTodo: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const res = await fetch('http://localhost:3004/todoList');
      const todoList = await res.json();
      this.setState({ todoList });
    } catch (error) {
      this.setState({ error });
    }
  };

  addData = async todo => {
    try {
      const res = await fetch('http://localhost:3004/todoList', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      // throw new Error('oops! something went wrong');
      const todoItem = await res.json();
      this.setState(({ todoList }) => ({
        todoList: [...todoList, todoItem],
        todoText: '',
        status: 'all',
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  updateData = async todo => {
    try {
      const res = await fetch(`http://localhost:3004/todoList/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const updatedItem = await res.json();
      const { todoList } = this.state;
      const index = todoList.findIndex(x => x.id === todo.id);
      this.setState({
        todoList: [...todoList.slice(0, index), updatedItem, ...todoList.slice(index + 1)],
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteData = async todo => {
    try {
      await fetch(`http://localhost:3004/todoList/${todo.id}`, {
        method: 'delete',
      });
      this.setState(({ todoList }) => ({
        todoList: todoList.filter(x => x.id !== todo.id),
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  updateTodo = todo => {
    this.setState({
      updatingTodo: todo,
    });
  };

  changeText = event => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const { todoText } = this.state;
    this.addData({
      text: todoText,
      isDone: false,
    });
  };

  markDone = item => {
    this.updateData({ ...item, isDone: !item.isDone });
  };

  deleteTodo = todo => {
    this.deleteData(todo);
  };

  updateText = event => {
    const { updatingTodo } = this.state;
    this.setState({
      updatingTodo: { ...updatingTodo, text: event.target.value },
    });
  };

  changeTodoText = () => {
    const { updatingTodo } = this.state;
    this.updateData(updatingTodo);
    this.setState({ updatingTodo: null });
  };

  render() {
    const { todoText, todoList, status, updatingTodo, error } = this.state;

    const filteredTask = todoList.filter(item => {
      if (status === 'pending') {
        return !item.isDone;
      }
      if (status === 'completed') {
        return item.isDone;
      }
      return true;
    });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <h1>Todo App</h1>

          {error && <p>{error.message}</p>}

          <TodoForm addTodo={this.addTodo} todoText={todoText} changeText={this.changeText} />

          {filteredTask.map(todoItem => (
            <TodoList
              key={todoItem.id}
              todoItem={todoItem}
              updatingTodo={updatingTodo}
              updateText={this.updateText}
              changeTodoText={this.changeTodoText}
              markDone={this.markDone}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
        <TodoStatus
          changeStatus={todoStatus => this.setState({ status: todoStatus })}
          status={status}
        />
      </div>
    );
  }
}
