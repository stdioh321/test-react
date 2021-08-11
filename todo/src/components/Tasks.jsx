import React from "react";
import Task from "./Task";




function Tasks({tasks}){
    
    return (<div>
        {tasks.map((el)=>( 
            <Task task={el} />
        ))}
    </div>);
    
}

export default Tasks;