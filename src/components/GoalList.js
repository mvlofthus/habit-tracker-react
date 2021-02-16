import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Card, Form, Button, ProgressBar } from 'react-bootstrap';


const GoalList = (props) => {
    const ec2 = "http://18.222.39.140:8000";
    
    const categories = props.categories.sort( function (a,b) {return a.title - b.title});
    
    // add category form on page
    const [formFieldsCat, setFormFieldsCat] = useState({
        'category': ''
    });

    console.log(formFieldsCat)

    const onCategoryInputChange = event => {
        console.log(`{${event.target.name}} field updated to ${event.target.value}`);
        const newFormFields = {
            ...formFieldsCat,
        }

        newFormFields[event.target.name] = event.target.value;
        setFormFieldsCat(newFormFields);
    };


    const onCategoryFormSubmit = (event) => {
        event.preventDefault();
        console.log(`this would submit fields as: ${formFieldsCat.title}`);
        axios.post(`${ec2}/categories`, formFieldsCat)
        .then((response) => {
            console.log(response);
            props.categoryRefreshCallback(props.categoryRefresh + 1);
        })
        .catch((error) => { 
            console.log(error.message);
        })

        setFormFieldsCat({
            'title': ''
    })}

    // add goals form on page
    const [formFields, setFormFields] = useState({
        'user_id': 1,
        'category_id': 1,
        'tag': '',
        'description': '',
        'weekly_freq': 0
    });

    console.log(formFields)

    const onGoalInputChange = event => {
        console.log(`{${event.target.name}} field updated to ${event.target.value}`);
        const newFormFields = {
            ...formFields,
        }

        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    };


    const onGoalFormSubmit = (event) => {
        event.preventDefault();
        console.log(`this would submit fields as: ${formFields.category_id} ${formFields.tag}  ${formFields.description} ${formFields.weekly_freq}`);
        axios.post(`${ec2}/goals`, formFields)
        .then((response) => {
            console.log(response);
            props.goalRefreshCallback(props.goalRefresh + 1);
        })
        .catch((error) => { 
            console.log(error.message);
        })

        setFormFields({
            'user_id': 1,
            'category_id': 1,
            'tag': '',
            'description': '',
            'weekly_freq': 0
    })}

    return (
    <Container>
    <Row>
        <Col sm={12} md={6}> 
        <Card className="dark-indigo-card h-100">
            <Card.Body>
        <h3> Categories: </h3>
        <ul>
            {props.categories.map((cat) => {
                return (<li key={cat.id}> <strong>{cat.title}</strong> </li>)
            })}
        </ul>
            </Card.Body>
        </Card>
        </Col>
    <Col  sm={12} md={6}>
    <Card className="dark-blue-card">
        <Card.Body>
        
        <h3> Goals: </h3>
        <ul>
            {props.goals.map((goal) => {
                const categ = props.categories.filter(i => i.id === goal.category_id)
                return (<li key={goal.id}><strong>{goal.tag}:</strong> {goal.description}, 
                <p> Category: {categ[0].title}, Frequency: {goal.weekly_freq} time(s) per week </p></li>)
            })}
        </ul>
        </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row>
        <Col sm={12} md={6}>  
        <h4>Add Category</h4>
        <Form onSubmit={onCategoryFormSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Name</Form.Label>
                <Form.Control name="title" type="text"  onChange={onCategoryInputChange} value={formFieldsCat.body}/>
            </Form.Group>
            <Button type="submit" variant="dark" >Submit form</Button>
        </Form>
        </Col>
        <Col sm={12} md={6}> 
        <h4>Add Goal</h4> 
        <Form onSubmit={onGoalFormSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Weekly Frequency</Form.Label>
                <Form.Control name="weekly_freq" type="number" placeholder="0"  onChange={onGoalInputChange} value={formFields.date}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control name="category_id" as="select"  onChange={onGoalInputChange} value={formFields.category_id} >
                {categories.map((category) => {
                    return (<option key={category.id} value={category.id}> {category.title}</option>)
                })} 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Tag (Short Description)</Form.Label>
                <Form.Control name="tag" type="text"  onChange={onGoalInputChange} value={formFields.goal_id} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description"  rows={3} onChange={onGoalInputChange} value={formFields.body}/>
            </Form.Group>
            <Button type="submit" variant="dark" >Submit form</Button>
        </Form>
        </Col>
    </Row>

    </Container>)
    
}


export default GoalList;