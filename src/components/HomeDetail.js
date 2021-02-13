import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";
import MeetGoals from './MeetGoals.js'

const HomeDetail = (props) => {

    // methods to calculate based on week number, pull from date with added gem
    // this will update each time I visit the homedetail page? useEffect?
    // will this update with goals? Pull the data from the goal list
    // then pass data to data viz as variables

    return (
    <div>
        <h3> Goal List: </h3>
        <ul>
            {props.goals.map((goal) => {
                return (<li key={goal.id}>{goal.tag}: {goal.description} </li>)
            })}
        </ul>

        <h3>Most Recently Completed:</h3>
        <div>{props.newestTask.map((task) => {
                const categ = props.categories.filter(i => i.id === task.category_id);
                const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 }).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

                return (<li key={task.id}> {dateFormatted}: {assocGoal[0].tag} -- {categ[0].title}
                <p>{task.body}</p>
                </li>)
            })}</div>

            {/* 2 rechart tables, pie and area to display this week's completion of goals and last 3-6  weeks, working backwards */}
        <div>
            <MeetGoals tasks={props.tasks}/>
        </div>

    </div>)
    
}


export default HomeDetail;