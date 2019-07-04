import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API } from '../../utils';
import { LocaleConsumer } from '../../Context/localeContext';
import * as types from '../../Constants/actionTypes';

class index extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  };

  state = {
    form: {
      title: '',
      watchHref: '',
      length: '',
      category: '',
      authorId: ''
    }
  };

  constructor(props) {
    super(props);
    props.loadCourses();
    props.loadAuthors();
  }

  getAuthor = id => {
    const { authors } = this.props;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  addCourses = () => {
    const { history, authors } = this.props;
    console.log(authors);
    const { form } = this.state;
    history.push({
      pathname: '/details/',
      state: {
        authors,
        course: form
      }
    });
  };

  editCourse = course => {
    const { history, authors } = this.props;
    history.push({
      pathname: '/details/',
      state: {
        authors,
        course
      }
    });
  };

  deleteCourse = async course => {
    try {
      await API({ uri: `http://localhost:3004/courses/${course.id}`, method: 'DELETE' });
      this.setState(state => {
        return {
          courses: state.courses.filter(x => x.id !== course.id)
        };
      });
    } catch (error) {
      // this.setState({ error });
    }
  };

  render() {
    const { courses, authors, loading, error } = this.props;
    console.log(authors);
    console.log(this.props);
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Oops! something went wrong!!</p>;
    }

    return (
      <div>
        <LocaleConsumer>
          {val => {
            return <span>{val.locale}</span>;
          }}
        </LocaleConsumer>

        <button type="button" onClick={this.addCourses}>
          Add Courses
        </button>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <a href={course.watchHref}>Link</a>
                </td>
                <td>{this.getAuthor(course.authorId)}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
                <td>
                  <button type="button" onClick={() => this.editCourse(course)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => this.deleteCourse(course)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.courses.loading || state.authors.loading,
    error: !!state.courses.error || !!state.authors.error,
    courses: state.courses.data,
    authors: state.authors.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCourses: () => dispatch({ type: `${types.LOAD_COURSES}_${types.REQUEST}` }),
    loadAuthors: () => dispatch({ type: `${types.LOAD_AUTHORS}_${types.REQUEST}` })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
