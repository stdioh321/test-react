import React, { useContext, useEffect, useState } from "react";

import { animated, useSpring } from "react-spring";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import "./Task.scss";

const Task = ({ task, onClickTask, onDeleteTask }) => {
  // const springProps = useSpring({

  //     opacity: 1,
  //     from: { opacity: 0},
  //   })
  // useEffect(()=>{
  //     console.log("useEffect:" + task?.id);
  // })
  const history = useHistory();
  const handleTaskDetailsClick = ()=>{
      history.push(`/${task.title}`);
  }
  return (
    <>
      <div
        className={`task-container ${task?.completed ? "completed" : ""}`}>
        <div className="title"
        
        onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
  
            onClickTask(task?.id);
          }}>{task?.title}</div>
        <small className={`task-container-id`}>{task?.id}</small>
        <div className="task-options" style={{ "z-index": "10" }}>
          <span
            className="task-delete"
            onClick={() => {
              onDeleteTask(task?.id);
            }}
          >
            <CgClose />
          </span>
          <span className="task-info" onClick={handleTaskDetailsClick}>
            <CgInfo />
          </span>
        </div>
      </div>
    </>
  );
};

export default Task;
