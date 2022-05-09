const Table = (props) => {
  const { tasks } = props;
  return (
    <table>
      <TableHeader />
      <TableBody tasks={tasks} />
    </table>
  );
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.tasks.map((task, index) => {
    return (
      <tr key={index}>
        <td>{task.task}</td>
        <td>{task.status ? "done" : "pending..."}</td>
        <td>
          <input type="button" value="Delete" />
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
