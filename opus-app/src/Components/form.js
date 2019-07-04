import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';

const Form = ({ fields, btnText, ...props }) => {
  return (
    <Formik {...props}>
      {({ handleSubmit, isSubmitting, errors }) => (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          {errors.general && <span>{errors.general}</span>}
          {fields.map(x => {
            return <Field key={x.id} {...x} />;
          })}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding Course....' : 'Add Course'}
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

/* if (x.reference) {
  if (x.reference && values[x.reference]) {
    return <Field key={x.id} {...x} />;
  }
  return null;
} */
