import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super(); // Super sunction calls the constructor of bas class
    this.state = { name: "" }; // Empty string instead of space
  }

  handleTextChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  handleSubmitButton = () => {
    alert(`Welcome ${this.state.name}`); // Template literals
  };

  render() {
    return (
      <div>
      <center>
        <h4>First React Application</h4>
        <table border={1}>
          <tbody>
            <tr>
              <td>Enter Name</td>
              <td>
                <input type="text" onChange={this.handleTextChange} />
              </td>
            </tr>
            <tr>
              <td>Click Here</td>
              <td>
                <button type="submit" onClick={this.handleSubmitButton}>
                  Button
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
    );
  }
}

export default MyComponent;
