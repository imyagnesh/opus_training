import * as Yup from 'yup';

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

export default validateCourses;
