import React, { Component } from 'react';

export default class Index extends Component {
  state = {
    todoText: '',
    todoList: [],
    status: 'all',
    error: false,
  };

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
      const todoItem = await res.json();
      this.setState(({ todoList }) => ({ todoList: [...todoList, todoItem] }));
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
    // const { todoText, todoList } = this.state;
    // this.setState({
    //   todoList: [
    //     ...todoList,
    //     {
    //       id: todoList.length + 1,
    //       text: todoText,
    //       isDone: false,
    //     },
    //   ],
    //   todoText: '',
    //   status: 'all',
    // });
  };

  markDone = item => {
    this.updateData({ ...item, isDone: !item.isDone });
    // const { todoList } = this.state;
    // const index = todoList.findIndex(x => x.id === item.id);
    // this.setState({
    //   todoList: [
    //     ...todoList.slice(0, index),
    //     { ...item, isDone: !item.isDone },
    //     ...todoList.slice(index + 1),
    //   ],
    // });
  };

  deleteTodo = todo => {
    this.deleteData(todo);
    // this.setState(({ todoList }) => ({
    //   todoList: todoList.filter(x => x.id !== todo.id),
    // }));

    // this.setState(state => {
    //   return {
    //     todoList: state.todoList.filter(x => x.id !== todo.id)
    //   };
    // });
  };

  render() {
    const { todoText, todoList, status, error } = this.state;

    console.log(error);

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

          <form onSubmit={this.addTodo}>
            <input
              type="text"
              placeholder="Write your TODO here..."
              value={todoText}
              onChange={this.changeText}
              required
            />
            <button type="submit">Add Todo</button>
          </form>

          {filteredTask.map(todoItem => (
            <div
              key={todoItem.id}
              style={{
                display: 'flex',
                padding: 20,
                width: '100%',
              }}
            >
              <input
                type="checkbox"
                checked={todoItem.isDone}
                onChange={() => this.markDone(todoItem)}
              />
              <span
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : 'none',
                  flex: 1,
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
        <div style={{ display: 'flex' }}>
          <button
            style={{ flex: 1 }}
            type="button"
            onClick={() => {
              this.setState({ status: 'all' });
            }}
          >
            All Tasks
          </button>
          <button
            style={{ flex: 1 }}
            type="button"
            onClick={() => {
              this.setState({ status: 'pending' });
            }}
          >
            Pending Tasks
          </button>
          <button
            style={{ flex: 1 }}
            type="button"
            onClick={() => {
              this.setState({ status: 'completed' });
            }}
          >
            Completed Tasks
          </button>
        </div>
      </div>
    );
  }
}
