const Table = (props) => {
  const { tasks, removeTask, handleCheck } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        tasks={tasks}
        removeTask={removeTask}
        handleCheck={handleCheck}
      />
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
        <td className={task.status ? "line-through" : ""}>{task.task}</td>
        <td>
          <input
            class="checkbox"
            type="checkbox"
            onChange={() => props.handleCheck(index)}
          />
          {task.status ? "Done" : "Pending..."}
        </td>
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
