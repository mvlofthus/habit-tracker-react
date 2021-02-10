import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GoalList = (props) => {
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

    // const [categories, setCategories] = useState([]);
    // const [categoryCount, setCategoryCount] = useState(0);

    // useEffect(() => {
    //     axios.get('/categories')
    //     .then((response) => {
    //         console.log(response);
    //         const categoryList = response.data.categories;
    //         setUsers(categoryList);
    //         setUserCount(response.data.count);
    //     })
    //     .catch((error) => { 
    //         setErrorMessage(error.message);
    //     })
    // }, [])


    return (
    <div>
        <h3> Goal List: </h3>
        <ul>
            {props.categories.map((cat) => {
                return (<li key={cat.id}> {cat.title}: {cat.id}</li>)
            })}
        </ul>
        <ul>
            {goals.map((goal) => {
                const categ = props.categories.filter(i => i.id === goal.category_id)
                return (<li key={goal.id}>{goal.tag}: {goal.description}, Category: {categ[0].title}, {goal.weekly_freq} time(s) per week </li>)
            })}
        </ul>

    </div>)
    
}


export default GoalList;