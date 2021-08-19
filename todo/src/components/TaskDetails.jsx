import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.scss';


const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    return (
        <>
        
        </>
    );
}
 
export default TaskDetails;