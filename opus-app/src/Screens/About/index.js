import React, { PureComponent } from 'react';
import Child from './child';

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
    console.log(user);
    console.log(open);
    console.log('parent re-render');
    return (
      <div>
        <h1>Parent component</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ user: { ...user, name: 'Yagnesh Modh' } });
          }}
        >
          Click Me
        </button>
        <Child user={user} />
      </div>
    );
  }
}

index.propTypes = {};

export default index;
