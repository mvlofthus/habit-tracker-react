import React, { useState } from 'react';
import { DateTime } from "luxon";
import {VictoryPie, VictoryTooltip, VictoryLabel} from 'victory';


const ChartsPage = (props) => {
let metGoals = props.metGoals;

  let pieData = [
    {category: 'Met Goals', number: metGoals},
    {category: 'Unmet Goals', number: (props.goalCount - metGoals)}
  ];

  return (
    <div className="chart">
      {/* <h3>Weekly Goals Completed</h3>  */}
      <VictoryPie 
      data={pieData}
      labelComponent={<VictoryLabel 
        // backgroundStyle={[
        //   { fill: "white", opacity: 0.7 },
        //   { fill: "white", opacity: 0.7 }]}/>
        style={[
          { fill: "white", fontWeight: 700}]}
          text={({ datum }) => [`${datum.category}: ${datum.number}`]} 
          />}
      labelRadius={30} //added
      // labelComponent={<VictoryTooltip />} //added
      // labelRadius={130} //added
      x="category"
      y="number"
      // colorScale="cool"
      // colorScale={['#CB5EEE', '#4b00ae']}
      colorScale={['#d83ef4', '#4b00ae']}
      />
    </div>
  )
}

export default ChartsPage;