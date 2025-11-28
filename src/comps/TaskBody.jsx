import Task from "./Task";
 
function TaskBody({ tasks, setTasks }) {
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
 
  return (
    <div id="TaskBody">
      {tasks.map((t, index) => (
        <Task
          key={index}
          text={t}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}
 
export default TaskBody;