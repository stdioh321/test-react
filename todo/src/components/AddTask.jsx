import React from "react";
import "./AddTask.scss";
import Button from "./Button";

const AddTask = ({txt=""})  => {
  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" name="" />
      <div style={{ "margin-left": "5px" }}>
        <Button
          onPressed={function () {
            console.log(this);
          }}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
