import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [taskCount, setTaskCount] = useState(0)
    
    useEffect(() => {
        axios.get('/tasks')
        .then((response) => {
            console.log(response);
            const tempTasks = response.data.tasks;
            const tempTaskCount = response.data.count
            setTasks(tempTasks);
            setTaskCount(tempTaskCount);
        })
        .catch((error) => { 
            console.log(error.message);
        })
    }, [])


    return (
    <div>
        <h3> Task List: </h3>
        <ul>
            {tasks.map((task) => {
                return (<li key={task.id}>{task.date}: {task.body}</li>)
            })}
        </ul>

    </div>)
    
}


export default TaskList;