import { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>To Do</h1>
        <Table />
      </div>
    );
  }
}

export default App;
