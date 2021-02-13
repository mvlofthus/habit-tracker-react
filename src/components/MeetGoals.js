import React, { useState, useEffect } from 'react';
import { DateTime } from "luxon";


const MeetGoals = (props) => {
    
    // post request onClick method then redirect to home detail

    const [weekGoals, setWeekGoals] = useState([])
    // Get current week
    let nowDT = DateTime.local();
    let nowWeek = DateTime.local(nowDT.year, nowDT.month, nowDT.day).weekNumber


    // filter tasks for dates in this week range, count instnces of each goal.  if >/ goal freq, 
    // if DateTime.local(taskdate) == nowWeek 
    
    // let thisWeekTasks = props.tasks.filter(task => DateTime.local(localtask.date).weekNumber == nowWeek)


    return (
        <div>
            <p>{nowWeek}</p>

            
            

        </div>
    );
}

export default MeetGoals;