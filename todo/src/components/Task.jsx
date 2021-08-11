import React from "react";
import "./Task.css"

const Task = ({task}) =>{
    return (
        <div className="task-container">
        <h1>Task: {task.id}</h1>
        <h3>Title: {task?.title}</h3>
        </div>
    );
}

export default Task;