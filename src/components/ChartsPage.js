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
      // labelComponent={<VictoryLabel 
      //   style={[
      //     { fill: "white", fontWeight: 700}]}
      //     text={({ datum }) => [`${datum.category}: ${datum.number}`]} 
      //     />}
      style={{ labels: { fill: "white", fontSize: 16, fontWeight: "bold" } }}
      labels={({ datum }) => [`${datum.category}: ${datum.number}`]}
      labelRadius={30} //added
      padding={{ top: 0, bottom: 30, left: 30, right: 30 }}
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