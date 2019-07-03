import React, { Component } from "react";

export default class index extends Component {
  state = {
    todoText: ""
  };

  render() {
    const { todoText } = this.state;
    return (
      <>
        <h1>Todo App</h1>
        <input type="text" placeholder="Write your TODO here..." />
        <button type="button">Add Todo</button>
      </>
    );
  }
}
