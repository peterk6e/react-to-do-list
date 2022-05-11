import { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    tasks: [
      {
        task: "do something",
        status: false,
      },
      {
        task: "do something else",
        status: false,
      },
    ],
  };

  removeTask = (index) => {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (task) => {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, task],
    });
  };

  handleCheck = (index) => {
    const { tasks } = this.state;
    tasks[index].status = !tasks[index].status 
    this.setState({
      tasks: tasks
    })
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="container">
        <h1>To Do</h1>
        <Table
          tasks={tasks}
          removeTask={this.removeTask}
          handleCheck={this.handleCheck}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
