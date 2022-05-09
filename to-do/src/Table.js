const Table = (props) => {
  const { tasks, removeTask } = props;
  return (
    <table>
      <TableHeader />
      <TableBody tasks={tasks} removeTask={removeTask} />
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
          <input
            type="button"
            value="Delete"
            onClick={() => {
              props.removeTask(index);
            }}
          />
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
