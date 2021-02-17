import React from 'react';
import MeetGoals from './MeetGoals.js';
import { Container, Col, Row } from 'react-bootstrap';

const HomeDetail = (props) => {

    // Had to restructure, moved all cards to MeetGoals

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
            </Row>
        </Container>
    </div>
    )
}


export default HomeDetail;