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
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  index.propTypes = {};

  return index;
};
