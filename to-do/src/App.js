import { Component } from "react";
import Table from "./Table";

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

  render() {
    const { tasks } = this.state;

    return (
      <div className="container">
        <h1>To Do</h1>
        <Table tasks={tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
