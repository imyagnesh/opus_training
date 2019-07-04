import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import Select from 'react-select';

const textBox = ({
  field: { name, value, onBlur },
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  options,
  ...props
}) => {
  return (
    <div style={{ margin: 10 }}>
      {/* <input type="text" {...field} {...props} /> */}
      <Select
        className="basic-single"
        classNamePrefix="select"
        name={name}
        value={options.find(x => x.value === value)}
        onBlur={onBlur}
        options={options}
        onChange={selectedOption => setFieldValue(name, selectedOption.value)}
        {...props}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

textBox.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default textBox;
