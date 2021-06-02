// Create a component called WarningSign
// which receives some text as a prop. This
// text should be presented inside an
// Alert of type danger.
import { Component } from "react";
class WarningSign extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Warning sign goes here</h1>
      </div>
    );
  }
}

export default WarningSign;
