/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import Child from './child';
import TestHOC from '../../hoc/testHOC';
import test from '../../hoc';

class index extends PureComponent {
  state = {
    user: {
      name: 'yagnesh',
      gender: 'male'
    },
    open: false
  };

  render() {
    const { user, open } = this.state;
    const { online } = this.props;
    console.log(user);
    console.log(open);
    console.log('online', online);
    console.log('parent re-render');
    return (
      <TestHOC>
        <div>
          <h1>Parent component</h1>
          <button
            type="button"
            onClick={() => {
              const data1 = this.childRef.getData();
              console.log(data1);
              this.setState({ user: { ...user, name: 'Yagnesh Modh' } });
            }}
          >
            Click Me
          </button>
          <Child
            ref={ref => {
              this.childRef = ref;
            }}
            user={user}
          />
        </div>
      </TestHOC>
    );
  }
}

index.propTypes = {};

export default test(index);
