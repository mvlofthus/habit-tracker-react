import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";
import { Form, Button } from 'react-bootstrap'


const NewTask = (props) => {
    
    // post request onClick method then redirect
    
    const categories = props.categories.sort( function (a,b) {return a.title - b.title});
    console.log(categories);

    const goals = props.goals.sort( function (a,b) {return a.title - b.title});

    const nowDT = DateTime.local();
    const nowMonth = (nowDT.month < 10 ? `0${nowDT.month}` : nowDT.month);
    

    const [formFields, setFormFields] = useState({
        category_id: 1,
        goal_id: 1,
        body: "",
        date: `${nowDT.year}-${nowMonth}-${nowDT.day}`
    });

    const onCategoryChange = event => {
        console.log(`Category Field updated ${event.target.value}`);
        setFormFields({
            goal_id: formFields.goal_id,
            category_id: event.target.value,
            body: formFields.body,
            date: formFields.date
        });
    };

    const onGoalChange = event => {
        console.log(`Goal Field updated ${event.target.value}`);
        setFormFields({
            goal_id: event.target.value,
            catetgory_id: formFields.category_id,
            body: formFields.body,
            date: formFields.date
        });
    };
    
    const onBodyChange = event => {
        console.log(`Body/details Field updated ${event.target.value}`);
        setFormFields({
            goal_id: formFields.goal_id,
            catetgory_id: formFields.category_id,
            body: event.target.value,
            date: formFields.date
        });
    };

    const onDateChange = event => {
        console.log(`Date Field updated from ${formFields.date} to ${event.target.value}`);
        setFormFields({
            goal_id: formFields.goal_id,
            catetgory_id: formFields.category_id,
            body: formFields.body,
            date: event.target.value
        });
    };



    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`this would submit fields as: ${formFields.date} ${formFields.category_id}  ${formFields.goal_id} ${formFields.body}`);
        // axios.post('/tasks', 
        // { 

        // })
        // .then((response) => {
        //     console.log(response);
        //     const userList = response.data.users;
        //     setUsers(userList);
        //     setUserCount(response.data.count);
        // })
        // .catch((error) => { 
        //     setErrorMessage(error.message);
        // })
    }

    return (   
    <div>  
        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="date"  onChange={onDateChange} value={formFields.date}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" placeholder="select category" onChange={onCategoryChange} value={formFields.category_id} >
                {categories.map((category) => {
                    return (<option key={category.id} value={category.id}> {category.title}</option>)
                })} 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Goal</Form.Label>
                <Form.Control as="select" onChange={onGoalChange} value={formFields.goal_id}>
                {goals.map((goal) => {
                    return (<option key={goal.id} value={goal.id}> {goal.tag} </option>)
                })} 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={onBodyChange} value={formFields.body}/>
            </Form.Group>
            



            <Button type="submit">Submit form</Button>
        </Form>
    </div>
    );
}

export default NewTask;