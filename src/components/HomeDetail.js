import React, { useState } from 'react';
import { DateTime } from "luxon";
import MeetGoals from './MeetGoals.js';
import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap';

const HomeDetail = (props) => {

    // methods to calculate based on week number, pull from date with added gem
    // this will update each time I visit the homedetail page? useEffect?
    // will this update with goals? Pull the data from the goal list
    // then pass data to data viz as variables


    const tasks = props.tasks.sort( function (a,b) {return new Date(a.date) - new Date(b.date)});


    return (
        <div >
            <Container className="home" >
            
            <Row>
                <Col>
                <div>
                    <MeetGoals goalCount={props.goalCount} categories={props.categories} goals={props.goals} tasks={props.tasks} newestTask={props.newestTask} />
                </div>
                </Col>
            
    
    

        

        {/* <div>
            <MeetGoals goalCount={props.goalCount} goals={props.goals} tasks={props.tasks}/>
        </div>

        <div>
            <ul>
                {tasks.map((task, i) => 
                <li key={i}>"task:" {task.date} {DateTime.fromHTTP(task.date).toISODate()}</li>
                )}
            </ul>
        </div> */}

            </Row>
        </Container>
    </div>
    )
}


export default HomeDetail;