import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";
import { Form, ToggleButton, ButtonGroup, Button, Container, Col, Row } from 'react-bootstrap';

const TaskList = (props) => {
    // sort by date
    const allTasks = props.tasks.sort( function (a,b) {return new Date(b.date) - new Date(a.date)});
    
    // sort by category feature with checkboxes
    const [radioValue, setRadioValue] = React.useState("All");
    
    let tasks = (radioValue == "All" ? allTasks : allTasks.filter(task => ( task.category_id == radioValue)));
    useEffect(() => {
        console.log(radioValue);
        if (radioValue == "All") {
            tasks = allTasks} 
        else {
            console.log(radioValue);
            tasks = allTasks.filter(task => ( task.category_id == radioValue));  }
    }, [radioValue])
        
    console.log (tasks);
        // delete task option

        
    
    return (
        <div>
        <Container>
        <Row>
            <Col> 
            <ButtonGroup toggle>
                <ToggleButton 
                    type="radio"
                    name="radio"
                    value="All"
                    variant="outline-dark"
                    checked={radioValue === "All"}
                    onChange={e => setRadioValue(e.currentTarget.value)}
                >
                    All
                </ToggleButton>
                {props.categories.map((category) => {return(
                <ToggleButton
                    key={category.id}
                    type="radio"
                    name="radio"
                    value={category.id}
                    variant="outline-dark"

                    checked={radioValue === category.id}
                    onChange={e => setRadioValue(e.currentTarget.value)}
                >
                    {category.title}
                </ToggleButton>
                )})}
            </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col sm={12} md={8} > 
            
            <ul class="text-left">
                {tasks.map((task) => {
                    const categ = props.categories.filter(i => i.id === task.category_id);
                    const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                    const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 }).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    
                    return (<li key={task.id}> <strong>{dateFormatted}: </strong> 
                    <p> Goal: {assocGoal[0].tag}
                    <br/> Category: {categ[0].title}
                    <br/> Details: {task.body} </p>
                    <hr/>
                    </li>)
                })}
            </ul>
            </Col>
            <Col></Col>
        </Row>
        </Container>
        </div>)
    }

export default TaskList;