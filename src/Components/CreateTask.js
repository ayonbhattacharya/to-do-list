import React from "react";
import "./../App.css";
import { render } from "@testing-library/react";

export default class CreateTask extends React.Component {
  textInput = React.createRef();

  handleClick = () => {
    this.props.taskDescription(this.textInput.current.value);
  };
  
  render() {
    return (
      <div className="CreateTask">
        <input
          className="TaskDescInput"
          placeholder="Type task description here .."
          ref={this.textInput}
        ></input>
        <button onClick={this.handleClick} className="SaveTaskButton">
          Save Task
        </button>
      </div>
    );
  }
}
