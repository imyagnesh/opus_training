import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const textBox = ({
  field, // { name, value, onChange, onBlur }
  containerStyle,
  errorComponent,
  errorRender,
  ...props
}) => {
  let errorProps = {};
  if (errorComponent) {
    errorProps = { component: errorComponent };
  }
  if (errorRender) {
    errorProps = { render: errorRender };
  }
  return (
    <div style={{ margin: 10, ...containerStyle }}>
      <input type="text" {...field} {...props} />
      <ErrorMessage name={field.name} {...errorProps} />
    </div>
  );
};

textBox.propTypes = {
  field: PropTypes.object.isRequired,
  containerStyle: PropTypes.object,
  errorComponent: PropTypes.string,
  errorRender: PropTypes.func
};

textBox.defaultProps = {
  containerStyle: {},
  errorComponent: null,
  errorRender: null
};

export default textBox;
