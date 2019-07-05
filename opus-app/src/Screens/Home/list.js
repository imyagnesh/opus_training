import React from 'react';
import PropTypes from 'prop-types';

const getAuthor = (authors, id) => {
  const author = authors.find(x => x.id === id);
  if (author) {
    return `${author.firstName} ${author.lastName}`;
  }
  return '';
};

const list = ({ courses, authors, editCourse, deleteCourse }) => {
  return (
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
            <td>{getAuthor(authors, course.authorId)}</td>
            <td>{course.length}</td>
            <td>{course.category}</td>
            <td>
              <button type="button" onClick={() => editCourse(course)}>
                Edit
              </button>
              <button type="button" onClick={() => deleteCourse(course.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

list.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  editCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default list;
