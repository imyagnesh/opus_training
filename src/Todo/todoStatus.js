import React from 'react';
import PropTypes from 'prop-types';

const todoStatus = ({ changeStatus, status }) => {
  return (
    <div style={{ display: 'flex' }}>
      <button
        style={{ flex: 1, backgroundColor: status === 'all' ? 'red' : 'green' }}
        type="button"
        onClick={() => {
          changeStatus('all');
        }}
      >
        All Tasks
      </button>
      <button
        style={{ flex: 1, backgroundColor: status === 'pending' ? 'red' : 'green' }}
        type="button"
        onClick={() => {
          changeStatus('pending');
        }}
      >
        Pending Tasks
      </button>
      <button
        style={{ flex: 1, backgroundColor: status === 'completed' ? 'red' : 'green' }}
        type="button"
        onClick={() => {
          changeStatus('completed');
        }}
      >
        Completed Tasks
      </button>
    </div>
  );
};

todoStatus.propTypes = {
  changeStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default todoStatus;
