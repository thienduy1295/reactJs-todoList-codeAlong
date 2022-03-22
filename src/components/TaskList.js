import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncompleted,
  setTaskStatus,
  removeTask,
  setShowIncompleted,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncompleted ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show Incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncompleted}
          onChange={(e) => setShowIncompleted(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
