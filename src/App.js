import React, { Component } from "react";
import CreateTask from "./Components/CreateTask.js";
import Task from "./Components/Task.js";
import "./App.css";

class App extends Component {
  state = {
    taskList: [
    ]
  };

  saveEventHandler = data => {
    var uniqid = Date.now();
    const taskList = [...this.state.taskList];
    taskList.push({
      id: uniqid,
      taskDescText: data,
      isFinished: false
    });
    this.setState({'taskList':taskList});
  };

  deleteEventHandler = (index) => {
    const taskList = [...this.state.taskList];
    taskList.splice(index,1)
    this.setState({'taskList':taskList});
  }

  editEventHandler = (index,data) => {
    var uniqid = Date.now();
    const taskList = [...this.state.taskList];
    taskList[index] = {
      id: uniqid,
      taskDescText: data,
      isFinished: false
    }
    this.setState({'taskList':taskList});
   console.log(this.state.taskList)
  }

  handleComplete = (index) => {
    console.log("In complete event handler")
    const taskList = [...this.state.taskList];
    const taskDescriptionOnEditIndex = taskList[index]
    taskDescriptionOnEditIndex.isFinished = true
    taskList[index] = taskDescriptionOnEditIndex
    this.setState({'taskList':taskList});
    console.log(this.state.taskList)
  }
  render() {
    return (
      <div className="App">
        <h1>A Basic Task Listing App - by Bhattacharya</h1>

        <CreateTask taskDescription={this.saveEventHandler} />
        {this.state.taskList.map((task, index) => {
          return (
            <Task
              taskDescText={task.taskDescText}
              taskCompleted={task.isFinished}
              deleteTask={() => this.deleteEventHandler(index)}
              editTask={(editTask) => this.editEventHandler(index,editTask)}
              handleComplete={() => this.handleComplete(index)}
              editing='true'
            />
          );
        })}
      </div>
    );
  }
}

export default App;
