import React, { Component } from "react";

export default class app extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      test: `hello ${props.type}`
    };
  }

  clickMe = () => {
    this.setState({ test: "test state changed" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.test}</h1>
        {/* <h1>{this.state.test}</h1> */}
        <button type="button" onClick={this.clickMe}>
          Click Me
        </button>
      </div>
    );
  }
}

// const app = ({ type, test }) => {
//   const clickMe = () => {
//     console.log("click me");
//   };
//   return (
//     <div>
//       <h1>{type}</h1>
//       <h1>{test}</h1>
//       <button type="button" onClick={clickMe}>
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default app;
