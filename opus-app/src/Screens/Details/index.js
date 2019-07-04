import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import TextBox from '../../Components/textBox';
import Select from '../../Components/dropdown';
import Form from '../../Components/form';

const validateCourses = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  watchHref: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  length: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  authorId: Yup.string().required('Required')
});

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
      form: {
        title: '',
        watchHref: '',
        length: '',
        category: '',
        authorId: ''
      },
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

  submitForm = values => {
    console.log(values);
  };

  render() {
    const { form, courseForm } = this.state;

    return (
      <Form
        initialValues={form}
        onSubmit={this.submitForm}
        validationSchema={courseForm.validation}
        fields={courseForm.fields}
        btnText="Add Course"
      />
    );
  }
}
