import { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <tableBody />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Task</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>task 1</td>
        <td>not completed</td>
        <td>
          <button value="Delete" />
        </td>
      </tr>
    </tbody>
  );
};

export default Table;
