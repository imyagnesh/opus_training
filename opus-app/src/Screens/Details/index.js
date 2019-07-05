import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API } from 'utils';
import TextBox from '../../Components/textBox';
import Select from '../../Components/dropdown';
import Form from '../../Components/form';
import validateCourses from './validation';

export default class index extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const { location } = props;
    const authorsOptions = location.state.authors.map(x => ({
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

  submitForm = async (values, actions) => {
    try {
      // throw new Error('Username or password is wrong!');
      let uri = 'http://localhost:3004/courses';
      if (values.id) {
        uri = `http://localhost:3004/courses/${values.id}`;
      }
      const course = await API({
        uri,
        method: values.id ? 'PUT' : 'POST',
        body: values
      });
      console.log(course);
      actions.resetForm();
      const { history } = this.props;
      history.goBack();
    } catch (error) {
      actions.setErrors({ general: error.message });
    } finally {
      actions.setSubmitting(false);
    }
  };

  render() {
    const { courseForm } = this.state;
    const {
      location: {
        state: { course }
      }
    } = this.props;
    return (
      <Form
        initialValues={course}
        onSubmit={this.submitForm}
        validationSchema={courseForm.validation}
        fields={courseForm.fields}
        btnText="Add Course"
      />
    );
  }
}
