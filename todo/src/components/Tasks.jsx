import React from "react";
import Task from "./Task";




function Tasks({tasks, onClickTask,onDeleteTask}){
    
    return (<div class="tasks-container">
        {tasks.map((el)=>( 
            <div>
                <Task task={el}  onClickTask={onClickTask} onDeleteTask={onDeleteTask} />
            </div>
            
        ))}
    </div>);
    
}

export default Tasks;