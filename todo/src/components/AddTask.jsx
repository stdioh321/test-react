import React, { useContext, useState } from "react";
import "./AddTask.scss";
import Button from "./Button";


const AddTask = ({txt="",onAdd=()=>{}})  => {
    const [inputData,setInputData] = useState('Teste');
    const handleInputChange = (e)=>{
        var v = e.target.value;
        setInputData(v);
    }
    


  return (
      
    <div className="add-task-container">
      <input type="text" className="add-task-input"  name="" onChange={handleInputChange} value={inputData} placeholder="Tarefa..." />
      {/* <textarea className="add-task-input" onChange={handleInputChange} value={inputData} placeholder="Tarefa..."></textarea> */}
      <div style={{ "margin-left": "5px" }}>
        <Button
          onPressed={function () {
            if(!inputData || inputData.length < 1) return
            onAdd(inputData);
            setInputData("");
            document.querySelector(".tasks-container > *:last-child")?.scrollIntoView();
          }}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
