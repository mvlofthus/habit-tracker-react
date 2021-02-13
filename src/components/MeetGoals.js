import React, { useState, useEffect } from 'react';
import { DateTime } from "luxon";


const MeetGoals = (props) => {
    
    // post request onClick method then redirect to home detail

    const [weekGoals, setWeekGoals] = useState({})
    // Get current week 
    let nowDT = DateTime.local();
    let nowWeek = DateTime.local(nowDT.year, nowDT.month, nowDT.day).weekNumber

    let janDT = DateTime.local(2021, 2, 12).weekNumber;

    // filter tasks for dates in this week range, count instnces of each goal.  if >/ goal freq, 
    
    // sort tasks in date order
    const tasks = props.tasks.sort( function (a,b) {return new Date(a.date) - new Date(b.date)});

    // add key value pair with week number to sorted task array 
    tasks.forEach((task) => {
        // const categ = props.categories.filter(i => i.id === task.category_id);
        // const assocGoal = props.goals.filter(i => i.id === task.goal_id);
        const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 })
        
        task.week = DateTime.local(dateFormatted.year, dateFormatted.month, dateFormatted.day).weekNumber
    })

    // filter for current week
    let thisWeekTasks = tasks.filter(task => 
        DateTime.local(DateTime.fromHTTP(task.date).year, DateTime.fromHTTP(task.date).month, DateTime.fromHTTP(task.date).plus({ days: 1 }).day).weekNumber === (nowWeek)
    );

    // make hashmap with goal progress and frequency
    const goals = props.goals;
    
    let weekProgress = new Map()
    
    goals.map((goal) => {
        const id = goal.id;
        weekProgress.set(id, 0);
        return (weekProgress);
    });

    console.log(weekProgress);

    weekProgress.constructor.prototype.increment = function (key) {
        this.has(key) && this.set(key, this.get(key) + 1)
    }

    thisWeekTasks.map((task) => {
        const id = task.goal_id;
        // weekProgress.set(id, (weekProgress(id) + 1));
        weekProgress.increment(id);
    });
    
    console.log('after tasks');
    console.log(weekProgress);


    return (
        <div>
            <p>today's day: {nowDT.day}</p>
            <p>today's month: {nowDT.month}</p>
            <p>today's week: {nowDT.weekNumber} vs {nowWeek}</p>
            <p>feb 1st: {janDT}</p>


            <h2>task week</h2>
            <ul>
            {tasks.map((task) => 
            <li key={task.id}>{task.date} - {task.week}</li>
            )}
            </ul>

            <h2> this week's tasks </h2>
            <ul>
                {thisWeekTasks.map((task) =>
                <li key={task.id}>{task.date} {task.id} {task.body} </li>
                )}
            </ul>

            {/* {goals.map((goal) => <p key={goal.id}>{goal.id} - {goal.tag} - {goal.weekly_freq}</p>)} */}
            

        </div>
    );
}

export default MeetGoals;