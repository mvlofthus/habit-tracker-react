import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GoalList = (props) => {
    // add goals form on page
    // edit goals form to page

    return (
    <div>
        <h3> Goal List: </h3>
        <ul>
            {props.categories.map((cat) => {
                return (<li key={cat.id}> {cat.title}: {cat.id}</li>)
            })}
        </ul>
        <ul>
            {props.goals.map((goal) => {
                const categ = props.categories.filter(i => i.id === goal.category_id)
                return (<li key={goal.id}>{goal.tag}: {goal.description}, Category: {categ[0].title}, {goal.weekly_freq} time(s) per week </li>)
            })}
        </ul>

    </div>)
    
}


export default GoalList;