import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./components/AddTask";

import Usingdidmount from "./components/Usingdidmount";
import TaskDetails from "./components/TaskDetails";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Task local", completed: true },
    // { id: uuidv4(), title: "Dormir", completed: false },
    // { id: uuidv4(), title: "Andar", completed: false },
  ]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    
    setTasks([...tasks,...data]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onAdd = (task) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: task,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((e1) => {
      if (e1.id === taskId) return { ...e1, completed: !e1.completed };
      return e1;
    });
    setTasks(newTasks);
  };

  const handleTaskDelete = (taskId) => {
    // console.log(taskId);
    const newTasks = tasks.filter((e1) => {
      return e1.id !== taskId;
    });
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="header">Minhas Tarefas</h1>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <div>
                <AddTask onAdd={onAdd}></AddTask>
              </div>
              <Tasks
                tasks={tasks}
                onClickTask={handleTaskClick}
                onDeleteTask={handleTaskDelete}
              ></Tasks>
            </>
          )}
        ></Route>
        <Route path="/:taskTitle" exact component={TaskDetails}></Route>
      </div>
    </Router>
  );
};

export default App;
// export {NumberContext}
