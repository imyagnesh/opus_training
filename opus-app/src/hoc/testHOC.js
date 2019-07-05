import React, { Component } from 'react';
import PropTypes from 'prop-types';

class testHOC extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {};

  render() {
    const { children } = this.props;

    return (
      <div>
        <lable>Hello from testHOC</lable>
        {children}
      </div>
    );
  }
}

testHOC.propTypes = {};

export default testHOC;
