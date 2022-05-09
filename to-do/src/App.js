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

  render() {
    const {tasks} = this.state;

    return (
      <div className="container">
        <h1>To Do</h1>
        <Table tasks={tasks} />
      </div>
    );
  }
}

export default App;
