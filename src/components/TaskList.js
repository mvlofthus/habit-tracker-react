import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";


const TaskList = (props) => {
    





    const tasks = props.tasks.sort( function (a,b) {return new Date(a.date) - new Date(b.date)});

    // sort by date

    return (
    <div>
        <h3> Task List: </h3>
        <div>
            {tasks.map((task) => {
                const categ = props.categories.filter(i => i.id === task.category_id);
                const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 }).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

                return (<li key={task.id}> {dateFormatted}: goal - {assocGoal[0].tag} category - {categ[0].title}
                <li> {task.body} </li>
                </li>)
            })}
        </div>

    </div>)
    
}


export default TaskList;