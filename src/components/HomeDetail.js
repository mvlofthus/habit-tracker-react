import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HomeDetail = (props) => {
  

    return (
    <div>
        <h3> Goal List: </h3>
        <ul>
            {props.goals.map((goal) => {
                return (<li key={goal.id}>{goal.tag}: {goal.description} </li>)
            })}
        </ul>

    </div>)
    
}


export default HomeDetail;