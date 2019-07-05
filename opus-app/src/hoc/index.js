/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default WrappedComponent => {
  class index extends Component {
    state = {
      online: true
    };

    // componentDidMount() {
    //   alert('hello');
    // }

    render() {
      return (
        <div>
          <label htmlFor="id">Hello From index hoc</label>
          <WrappedComponent {...this.props} {...this.state} />
        </div>
      );
    }
  }

  index.propTypes = {};

  return index;
};
