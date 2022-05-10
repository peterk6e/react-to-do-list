import { Component } from "react";

class Form extends Component {
    initialState = {
        task: '',
        status: false
    }

    state = this.initialState

    render() {
        const {task} = this.state

        return (
            <form>
                <h4>Add a new task</h4>
                <label>New task:</label>
                <input type="text" value={task} placeholder="Enter a new task" />
                <input type="button" value="Add new task" onClick={this.HandleSubmit} />
            </form>
        )
    }
}

export default Form
