import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";
import { Form, Button, Container, Col, Row, Alert } from 'react-bootstrap';




const NewTask = (props) => {
    const ec2 = "https://18.222.39.140:8000";

    
    // post request onClick method then redirect
    const [show, setShow] = useState(true);
    const AlertDismissibleExample = () => {
        
            if (show) {
            return (
                <Alert variant="dark" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Task Added!</Alert.Heading>
                <p>
                    Add more entries, or navigate to other pages to see your updated stats!
                </p>
                </Alert>
            );
            }
    }
        


    const categories = props.categories.sort( function (a,b) {return a.title - b.title});
    console.log(categories);

    const goals = props.goals.sort( function (a,b) {return a.title - b.title});

    const nowDT = DateTime.local();
    const nowMonth = (nowDT.month < 10 ? `0${nowDT.month}` : nowDT.month);
    

    const [formFields, setFormFields] = useState({
        'user_id': 1,
        'category_id': 1,
        'goal_id': 1,
        'date': `${nowDT.year}-${nowMonth}-${nowDT.day}`,
        'body': ""
    });


    console.log(formFields)

    const onInputChange = event => {
        console.log(`{${event.target.name}} field updated to ${event.target.value}`);
        const newFormFields = {
            ...formFields,
        }

        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    };


    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`this would submit fields as: ${formFields.date} ${formFields.category_id}  ${formFields.goal_id} ${formFields.body}`);
        axios.post(`${ec2}/tasks`, formFields)
        .then((response) => {
            console.log(response);
            props.taskRefreshCallback(props.taskRefresh + 1);
            setShow(true);
        })
        .catch((error) => { 
            console.log(error.message);
        })

        
        setFormFields({
            'user_id': 1,
            'category_id': 1,
            'goal_id': 1,
            'date': `${nowDT.year}-${nowMonth}-${nowDT.day}`,
            'body': ""
        })
        
}

    return (   
    <div>
    <Container>
    <Row>
        <Col></Col>
        <Col sm={12} md={8}>  
        {AlertDismissibleExample()}
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control name="date" type="date" placeholder="date"  onChange={onInputChange} value={formFields.date}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control name="category_id" as="select"  onChange={onInputChange} value={formFields.category_id} >
                {categories.map((category) => {
                    return (<option key={category.id} value={category.id}> {category.title}</option>)
                })} 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Goal</Form.Label>
                <Form.Control name="goal_id" as="select" onChange={onInputChange} value={formFields.goal_id}>
                {goals.map((goal) => {
                    return (<option key={goal.id} value={goal.id}> {goal.tag} </option>)
                })} 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Details</Form.Label>
                <Form.Control name="body" as="textarea" rows={3} onChange={onInputChange} value={formFields.body}/>
            </Form.Group>
            



            <Button type="submit" variant="dark" >Submit form</Button>
            {/* <Button type="submit" variant="dark" style={{ color: "white", background: "#4b00ae" }} >Submit form</Button> */}
        
        </Form>
        </Col>
        <Col></Col>
    </Row>
    </Container>
    </div>
    );
}

export default NewTask;