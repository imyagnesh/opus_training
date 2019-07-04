import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';

const Form = ({ fields, btnText, ...props }) => {
  return (
    <Formik {...props}>
      {({ handleSubmit, isSubmitting }) => (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          {fields.map(x => (
            <Field key={x.id} {...x} />
          ))}
          <button type="submit" disabled={isSubmitting}>
            {btnText}
          </button>
        </form>
      )}
    </Formik>
  );
};

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  btnText: PropTypes.string.isRequired
};

export default Form;
