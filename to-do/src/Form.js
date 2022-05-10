import { Component } from "react";

class Form extends Component {
  initialState = {
    task: '',
    status: false
  }

  state = this.initialState

  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { task } = this.state

    return (
      <form>
        <h4>Add a new task</h4>
        <label>New task:</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={this.HandleChange}
          placeholder="Enter a new task"
        />
        <input type="button" value="Add new task" onClick={this.formSubmit} />
      </form>
    )
  }
}

export default Form
