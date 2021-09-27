import React, { Fragment, useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "exemplo 1",
      completed: false,
    },
    {
      id: "2",
      title: "exemplo 2",
      completed: true,
    },
  ]);
  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
