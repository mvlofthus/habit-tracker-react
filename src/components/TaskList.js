import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TaskList = (props) => {
    



    
    // sort by date

    return (
    <div>
        <h3> Task List: </h3>
        <div>
            {props.tasks.map((task) => {
                const categ = props.categories.filter(i => i.id === task.category_id);
                const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                return (<li key={task.id}> {task.date}: goal - {assocGoal[0].tag} category - {categ[0].title}
                <li> {task.body} </li>
                </li>)
            })}
        </div>

    </div>)
    
}


export default TaskList;