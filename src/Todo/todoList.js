import React from 'react';
import PropTypes from 'prop-types';

const todoList = ({
  todoItem,
  updatingTodo,
  updateText,
  changeTodoText,
  markDone,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <div
      key={todoItem.id}
      style={{
        display: 'flex',
        padding: 20,
        width: '100%',
      }}
    >
      <input type="checkbox" checked={todoItem.isDone} onChange={() => markDone(todoItem)} />
      {updatingTodo && todoItem.id === updatingTodo.id ? (
        <input
          type="text"
          value={updatingTodo.text}
          onChange={updateText}
          onBlur={changeTodoText}
        />
      ) : (
        <span
          style={{
            textDecoration: todoItem.isDone ? 'line-through' : 'none',
            flex: 1,
          }}
        >
          {todoItem.text}
        </span>
      )}
      <button type="button" onClick={() => updateTodo(todoItem)}>
        Update
      </button>

      <button type="button" onClick={() => deleteTodo(todoItem)}>
        Delete
      </button>
    </div>
  );
};

todoList.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  updatingTodo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
  updateText: PropTypes.func.isRequired,
  changeTodoText: PropTypes.func.isRequired,
  markDone: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

todoList.defaultProps = {
  updatingTodo: null,
};

export default todoList;
