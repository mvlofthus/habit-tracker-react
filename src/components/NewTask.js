import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from "luxon";
import { Form, Button } from 'react-bootstrap'


const NewTask = (props) => {
    
    // post request onClick method then redirect

    const testArray = [{id: 1, title: 'first'}, {id:2, title: 'second'} ]

    const categories = props.categories;

    const categoryList = () => {
        const list = props.categories.map((category) => {
            <option value={category.title}> {category.title} </option>
        })
    return list;
    }

    const [formFields, setFormFields] = useState({
        name: "",
        body: ""
    });

    const onNameChange = event => {
        console.log(`Name Field updated ${event.target.value}`);
        setFormFields({
            name: event.target.value,
            body: formFields.body
        });
    };
    
    const onBodyChange = event => {
        console.log(`Body/details Field updated ${event.target.value}`);
        setFormFields({
            name: formFields.name,
            body: event.target.value
        });
    };



    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`this would submit fields as: ${formFields.name} ${formFields.body}`);
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
        {/* <div className="form" onSubmit={onFormSubmit}>
        <form>
            <label>
                Name:
                <input type="text" name="name" onChange={onNameChange} value={formFields.name}/>
            </label>
            <label>
                Details:
                <textarea type="text" name="body" onChange={onBodyChange} value={formFields.body}/>
            </label>
            <select   placeholder="select category">
                {categories.map((category) => {
                    <option value={category.id}> {category.title} </option>
                })}
            </select>

            <input type="submit" value="Submit" />
        </form> */}


        <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                {categories.map((category) => {
                    console.log(category.title);
                    <option value={category.id}> {category.title} </option>
                })} 
                {testArray.map((item) => {
                    <option value={item.id}> {item.title} </option>
                })} 
                {categoryList}
                </Form.Control>
            </Form.Group>
            <Form.Group >
                <Form.Label as="legend" >
                    Radios
                </Form.Label>
                    <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                    <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
            </Form.Group>



            <Button type="submit">Submit form</Button>
        </Form>
    </div>
    );
}

export default NewTask;