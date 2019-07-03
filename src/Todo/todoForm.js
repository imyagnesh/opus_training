import React from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ addTodo, todoText, changeText }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Write your TODO here..."
        value={todoText}
        onChange={changeText}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

todoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todoText: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
};

export default todoForm;
