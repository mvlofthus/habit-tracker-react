import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HomeDetail = (props) => {
    const [goals, setGoals] = useState([]);
    const [goalCount, setGoalCount] = useState(0)
    
    useEffect(() => {
        axios.get('/goals')
        .then((response) => {
            console.log(response);
            const tempGoals = response.data.goals;
            const tempGoalsCount = response.data.count
            setGoals(tempGoals);
            setGoalCount(tempGoalsCount);
        })
        .catch((error) => { 
            console.log(error.message);
        })
    }, [])


    return (
    <div>
        <h3> Goal List: </h3>
        <ul>
            {goals.map((goal) => {
                return (<li key={goal.id}>{goal.tag}: {goal.description} </li>)
            })}
        </ul>

    </div>)
    
}


export default HomeDetail;