import { useState } from "react";
import Headline from "./comps/Headline.jsx";
import Search from "./comps/Search.jsx";
import TaskBody from "./comps/TaskBody.jsx";

import "./Style/Container.css"
import "./Style/Menu.css"
import "./Style/Task.css"

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
 
  return (
  <div id="App">
    <div id="Container">
      <Headline />
      <Search
        task={task}
        setTask={setTask}
        addTask={addTask}
        />
      <TaskBody tasks={tasks} setTasks={setTasks} />
    </div>
  </div>
  );
}
 
 
export default App;