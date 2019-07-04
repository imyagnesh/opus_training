import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const textBox = ({
  field, // { name, value, onChange, onBlur }
  ...props
}) => {
  return (
    <div style={{ margin: 10 }}>
      <input type="text" {...field} {...props} />
      <ErrorMessage name={field.name} />
    </div>
  );
};

textBox.propTypes = {
  field: PropTypes.object.isRequired
};

export default textBox;
