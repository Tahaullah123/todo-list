function Task({ text, onDelete }) {
  return (
    <div className="TaskContainer">
      <div className="Task">
        <p className="TaskQuestion">{text}</p>
      </div>
 
      <div className="TaskStatus">
        <button onClick={onDelete}>DELETE</button>
      </div>
    </div>
  );
}
 
export default Task;