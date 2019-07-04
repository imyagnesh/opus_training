import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API } from '../../utils';
import { LocaleConsumer } from '../../Context/localeContext';

class index extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    courses: [],
    authors: [],
    error: false,
    form: {
      title: '',
      watchHref: '',
      length: '',
      category: '',
      authorId: ''
    }
  };

  // constructor(props) {
  //   super(props);
  //   this.loadData();
  // }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const res = await Promise.all([
        API({ uri: 'http://localhost:3004/courses' }),
        API({ uri: 'http://localhost:3004/authors' })
      ]);
      this.setState({ courses: res[0], authors: res[1] });
    } catch (error) {
      this.setState({ error });
    }
  };

  getAuthor = id => {
    const { authors } = this.state;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  addCourses = () => {
    const { history } = this.props;
    const { authors, form } = this.state;
    history.push({
      pathname: '/details/',
      state: {
        authors,
        course: form
      }
    });
  };

  editCourse = course => {
    const { history } = this.props;
    const { authors } = this.state;
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
      this.setState({ error });
    }
  };

  render() {
    const { courses, error, authors } = this.state;
    console.log(authors);
    console.log(this.props);
    return (
      <div>
        <LocaleConsumer>
          {val => {
            return <span>{val.locale}</span>;
          }}
        </LocaleConsumer>
        {error && <span>{error.message}</span>}

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
    courses: state.courses
  };
}

function mapDispatchToProps() {
  return {
    // actions: bindActionCreators(PropertiesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
