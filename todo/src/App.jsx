import React,{useState} from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
    const [tasks, setTasks] = useState([
        {id:1,title:"Estudar", completed:true},
        {id:2,title:"Dormir", completed:false},
    ]);

    return ( 
    <div>

       
        <div className="container">
        <div>
            <AddTask></AddTask>
        </div>
            <Tasks tasks={tasks} ></Tasks >
        </div>  
    </div>

    );
}

export default App;