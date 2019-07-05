import React, { memo } from 'react';
import PropTypes from 'prop-types';

const child = ({ user }) => {
  console.log('child re-render');
  return (
    <div>
      <h1>Child Component</h1>
      <p>{`Name: ${user.name}`}</p>
      <p>{`Gender: ${user.gender}`}</p>
    </div>
  );
};

child.propTypes = {
  user: PropTypes.object.isRequired
};

export default memo(child);
