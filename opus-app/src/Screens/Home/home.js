import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import CourseDialog from './courseDialog';

const initialVal = {
  title: '',
  watchHref: '',
  length: '',
  category: '',
  authorId: ''
};

const Home = ({
  loadCourses,
  loadAuthors,
  courses,
  authors,
  loading,
  error,
  addCourse,
  editCourse,
  deleteCourses
}) => {
  const [form, setForm] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadCourses();
    loadAuthors();
    return () => {
      // ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  }, []);

  const toggleDialog = () => {
    setOpen(!open);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setForm(initialVal);
          toggleDialog();
        }}
      >
        Add Courses
      </button>
      <List
        courses={courses}
        authors={authors}
        editCourse={course => {
          setForm(course);
          toggleDialog();
        }}
        deleteCourse={deleteCourses}
      />
      {form && open && (
        <CourseDialog
          open={open}
          initialValues={form}
          authors={authors}
          submitForm={(values, actions) => {
            if (values.id) {
              editCourse(values, actions);
            } else {
              addCourse(values, actions);
            }
            toggleDialog();
          }}
        />
      )}
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  addCourse: PropTypes.func.isRequired,
  editCourse: PropTypes.func.isRequired,
  deleteCourses: PropTypes.func.isRequired
};

export default memo(Home);

// class index extends PureComponent {
//   static propTypes = {
//     history: PropTypes.shape({
//       push: PropTypes.func.isRequired
//     }).isRequired,
//     loadCourses: PropTypes.func.isRequired,
//     loadAuthors: PropTypes.func.isRequired,
//     authors: PropTypes.array.isRequired,
//     courses: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.object.isRequired,
//     addCourse: PropTypes.func.isRequired,
//     editCourse: PropTypes.func.isRequired,
//     deleteCourses: PropTypes.func.isRequired
//   };

//   state = {
//     form: null,
//     open: false
//   };

//   constructor(props) {
//     super(props);
//     props.loadCourses();
//     props.loadAuthors();
//   }

//   toggleDialog = () => {
//     this.setState(state => {
//       return { open: !state.open };
//     });
//   };

//   render() {
//     const { courses, authors, loading, error, addCourse, editCourse, deleteCourses } = this.props;
//     const { open, form } = this.state;

//     if (loading) {
//       return <p>Loading...</p>;
//     }

//     if (error) {
//       return <p>{error.message}</p>;
//     }

//     return (
//       <div>
//         <button
//           type="button"
//           onClick={() => {
//             this.setState({ form: initialVal });
//             this.toggleDialog();
//           }}
//         >
//           Add Courses
//         </button>
//         <List
//           courses={courses}
//           authors={authors}
//           editCourse={course => {
//             this.setState({ form: course });
//             this.toggleDialog();
//           }}
//           deleteCourse={deleteCourses}
//         />
//         {form && open && (
//           <CourseDialog
//             open={open}
//             initialValues={form}
//             authors={authors}
//             submitForm={(values, actions) => {
//               if (values.id) {
//                 editCourse(values, actions);
//               } else {
//                 addCourse(values, actions);
//               }
//               this.toggleDialog();
//             }}
//           />
//         )}
//       </div>
//     );
//   }
// }
