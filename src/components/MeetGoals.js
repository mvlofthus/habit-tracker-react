import React from 'react';
import { DateTime } from "luxon";
import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import ChartsPage from './ChartsPage.js';

const MeetGoals = (props) => {
    
    // Get current day 
    let nowDT = DateTime.local();
    
    // sort tasks in date order
    const tasks = props.tasks.sort( function (a,b) {return new Date(a.date) - new Date(b.date)});

    // add key value pair with week number to sorted task array 
    tasks.forEach((task) => {
        // const categ = props.categories.filter(i => i.id === task.category_id);
        // const assocGoal = props.goals.filter(i => i.id === task.goal_id);
        const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 })
        
        task.week = DateTime.local(dateFormatted.year, dateFormatted.month, dateFormatted.day).weekNumber
    })

    // filter for current week
    let thisWeekTasks = tasks.filter(task => 
        DateTime.local(DateTime.fromHTTP(task.date).year, DateTime.fromHTTP(task.date).month, DateTime.fromHTTP(task.date).plus({ days: 1 }).day).weekNumber === (nowDT.weekNumber)
    );

    // make hashmap with each goal
    const goals = props.goals;
    
    let weekProgress = new Map()
    
    goals.map((goal) => {
        const id = goal.id;
        weekProgress.set(id, 0);
        return (weekProgress);
    });

    console.log(weekProgress);

    // calculate number of tasks assoc with each goal this week
    weekProgress.constructor.prototype.increment = function (key) {
        this.has(key) && this.set(key, this.get(key) + 1)
    }

    thisWeekTasks.map((task) => {
        const id = task.goal_id;
        // weekProgress.set(id, (weekProgress(id) + 1));
        weekProgress.increment(id);
        return weekProgress;
    });
    
    console.log('after tasks');
    console.log(weekProgress);

    

    // calculate number of met goals to pass data to charts page
    let metGoals = 0
    
    {goals.map((goal) => {
            const id = goal.id; 
    
            if (goal.weekly_freq <= weekProgress.get(id)) {
                metGoals++};
            }
    )};

    return (
        <div>
            <Container>
            <Row>
                <Col sm={12} lg={6}> 
                <Card className="dark-indigo-card">
                    <Card.Body>

                    <h3> Goals: </h3>
                    <hr/>
                    <ul ><strong>
                        {props.goals.map((goal) => {
                            const id = goal.id;

                            return (<li key={id} className="prog-bar-list">
                                <p ><strong>{goal.tag} - {weekProgress.get(id)} / {goal.weekly_freq}</strong></p>
                                <ProgressBar now={(weekProgress.get(id)) / (goal.weekly_freq) * 100}/>
                                </li>
                                )
                        })}
                    </strong></ul>
                    </Card.Body>
                </Card>
                </Col>
                <Col  sm={12} lg={6}>
                <Card className="dark-blue-card">
                    <Card.Body>
                    <h3>Week of {DateTime.local().toLocaleString(DateTime.DATE_FULL)}</h3>
                    <hr/>
                    <div className="col-sm-12 h-100 d-table">
                    <div className="d-table-cell align-middle">
                    <div className="blue-highlight"><h5>Most Recently Completed Task:</h5>
                    {props.newestTask.map((task) => {
                        // const categ = props.categories.filter(i => i.id === task.category_id);
                        const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                        const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 }).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

                        return (<div key={task.id}> <strong>{dateFormatted}</strong> 
                        <br/> Goal: {assocGoal[0].tag}
                        <p>{task.body}</p>
                        </div>)
                        })}
                        </div> 
                    </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={6} >
                    <ChartsPage goalCount={props.goalCount} metGoals={metGoals}/>
                </Col>
                <Col sm={12} lg={6} >
                <Card className="dark-pink-card">
                    <Card.Body>
                    <h3> Goal Progress: </h3>
                    <hr/>
                    
                        {goals.map((goal) => {
                        const id = goal.id; 
                        
                        return (<div key={id} className="goal-progress-header">  <strong><strong>{goal.tag} - {weekProgress.get(id)} / {goal.weekly_freq}</strong></strong>
                        
                        <ul className="goal-progress-list">
                            {thisWeekTasks.filter(task => task.goal_id === id).map((task) => {
                            // const assocGoal = props.goals.filter(i => i.id === task.goal_id);
                            const dateFormatted = DateTime.fromHTTP(task.date).plus({ days: 1 });
            
                            return (
                            <li key={task.id}> <strong> {dateFormatted.weekdayShort}, {dateFormatted.monthShort} {dateFormatted.day}: </strong> {task.body}</li>
                            )})}
                        </ul>
                        </div>)
                        })}
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            </Container>
        
        
        
        </div>
    );
}

export default MeetGoals;