import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class child extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  getData = () => {
    return 'yagnesh';
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Child Component</h1>
        <p>{`Name: ${user.name}`}</p>
        <p>{`Gender: ${user.gender}`}</p>
      </div>
    );
  }
}
