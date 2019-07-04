import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    courses: [],
    authors: [],
    error: false
  };

  constructor(props) {
    super(props);
    this.loadData();
  }

  loadData = async () => {
    try {
      const res = await Promise.all([
        fetch('http://localhost:3004/courses'),
        fetch('http://localhost:3004/authors')
      ]);
      const jsonRes = await Promise.all([res[0].json(), res[1].json()]);
      this.setState({ courses: jsonRes[0], authors: jsonRes[1] });
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
    const { authors } = this.state;
    history.push({
      pathname: '/details/',
      state: {
        authors
      }
    });
  };

  render() {
    const { courses, error, authors } = this.state;
    console.log(authors);
    return (
      <div>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
