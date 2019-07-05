import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../Components/form';
import TextBox from '../../Components/textBox';
import Select from '../../Components/dropdown';
import validateCourses from '../Details/validation';

class courseDialog extends Component {
  constructor(props) {
    super(props);
    const { authors } = props;
    const authorsOptions = authors.map(x => ({
      value: x.id,
      label: `${x.firstName} ${x.lastName}`
    }));
    this.state = {
      courseForm: {
        fields: [
          {
            id: 1,
            name: 'title',
            component: TextBox,
            placeholder: 'Title'
          },
          {
            id: 2,
            name: 'watchHref',
            component: TextBox,
            placeholder: 'Link'
          },
          {
            id: 3,
            name: 'length',
            component: TextBox,
            placeholder: 'Length'
          },
          {
            id: 4,
            name: 'category',
            component: TextBox,
            placeholder: 'Category'
          },
          {
            id: 5,
            name: 'authorId',
            component: Select,
            placeholder: 'Author',
            options: [{ value: '', label: 'Select Author' }, ...authorsOptions]
          }
        ],
        validation: validateCourses
      }
    };
  }

  render() {
    const { initialValues, open, submitForm } = this.props;
    const { courseForm } = this.state;
    console.log(initialValues);
    return (
      <dialog open={open}>
        <Form
          initialValues={initialValues}
          onSubmit={submitForm}
          validationSchema={courseForm.validation}
          fields={courseForm.fields}
          btnText="Add Course"
        />
      </dialog>
    );
  }
}

courseDialog.propTypes = {
  initialValues: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  authors: PropTypes.array.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default courseDialog;
