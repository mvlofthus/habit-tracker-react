import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";
import NewTaskPopup from './NewTaskPopup.js';

const TaskList = (props) => {
    // sort by date
    const tasks = props.tasks.sort( function (a,b) {return new Date(a.date) - new Date(b.date)});
    
    // sort by category feature with checkboxes
    // delete task option

    return (
        <div>
            <h3> Task List: </h3>
            <div>
                {tasks.map((task) => {
                    const categ = props.categories.filter(i => i.id === task.category_id);
                    const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                    const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 }).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    
                    return (<li key={task.id}> {dateFormatted}: {assocGoal[0].tag} -- {categ[0].title}
                    <p> {task.body} </p>
                    </li>)
                })}
            </div>
            
        </div>)
}

export default TaskList;