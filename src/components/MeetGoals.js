import React, { useState, useMemo } from 'react';
import { DateTime } from "luxon";

import ChartsPage from './ChartsPage.js'

const MeetGoals = (props) => {
    
    // Get current day 
    let nowDT = DateTime.local();
    
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
        DateTime.local(DateTime.fromHTTP(task.date).year, DateTime.fromHTTP(task.date).month, DateTime.fromHTTP(task.date).plus({ days: 1 }).day).weekNumber === (nowDT.weekNumber)
    );

    // make hashmap with each goal
    const goals = props.goals;
    
    let weekProgress = new Map()
    
    goals.map((goal) => {
        const id = goal.id;
        weekProgress.set(id, 0);
        return (weekProgress);
    });

    console.log(weekProgress);

    // calculate number of tasks assoc with each goal this week
    weekProgress.constructor.prototype.increment = function (key) {
        this.has(key) && this.set(key, this.get(key) + 1)
    }

    thisWeekTasks.map((task) => {
        const id = task.goal_id;
        // weekProgress.set(id, (weekProgress(id) + 1));
        weekProgress.increment(id);
        return weekProgress;
    });
    
    console.log('after tasks');
    console.log(weekProgress);

    // calculate number of met goals to pass data to charts page
    let metGoals = 0
    
    {goals.map((goal) => {
            const id = goal.id; 
    
            if (goal.weekly_freq <= weekProgress.get(id)) {
                metGoals++};
            }
    )};


    // const [metGoals, setMetGoals] = useState(0)
    // {goals.map((goal) => {
    //     const id = goal.id; 

    //     if (goal.weekly_freq < weekProgress.get(id)) {
    //         const temp = metGoals;
    //         setMetGoals(temp + 1);
    //     }
    // })};




    return (
        <div>
            <p>today's day: {nowDT.day}</p>
            <p>today's month: {nowDT.month}</p>
            <p>today's week: {nowDT.weekNumber} vs </p>


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

            {goals.map((goal) => {
            const id = goal.id; 
            
            
            return (<p key={id}>{id} - {goal.tag} - goal: {goal.weekly_freq} - progress: {weekProgress.get(id)}</p>)})}
            
            {/* {weekProgress.forEach((key, value) => {
                const assocGoal = props.goals.filter(i => i.id === key);

                return (<p key={key}> {assocGoal[0].tag} goal: {assocGoal[0].weekly_freq} achieved: {value} </p>)

            })} */}

            <ChartsPage goalCount={props.goalCount} metGoals={metGoals}/>
        </div>
    );
}

export default MeetGoals;