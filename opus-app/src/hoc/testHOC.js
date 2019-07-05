import React from 'react';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};
