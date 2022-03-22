import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS fundametal", status: 1 },
    { id: "task_2", title: "Code a Todo List level 2", status: 0 },
  ]);
  const [showIncompleted, setShowIncompleted] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Chan hieu ung refesh page
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get things done" />
      <TaskList
        tasks={tasks}
        showIncompleted={showIncompleted}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncompleted={setShowIncompleted}
      />

      <AddTaskForm
        newTask={newTask}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
