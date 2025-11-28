import { useState } from "react";
 
function Search({task, setTask, addTask}) {
  return (
    <div id="Search">
      <div className="SearchBox">
        <label className="LabelTekst">
          Add Task:{" "}
          <input
            name="myInput"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
        </label>
      </div>
      <div className="AddButton">
        <button className="ButtonTekst" onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}
 
export default Search;