import React, { useState } from 'react';
import { DateTime } from "luxon";
import {VictoryPie, VictoryChart} from 'victory';


const ChartsPage = (props) => {
let metGoals = props.metGoals;

  let pieData = [
    {category: 'Met Goals', number: metGoals},
    {category: 'Unmet Goals', number: (props.goalCount - metGoals)}
  ];

  return (
  
    <VictoryPie 
    data={pieData}
    x="category"
    y="number"
    labes={p => `${p.category}`}
    />
  )
}

export default ChartsPage;