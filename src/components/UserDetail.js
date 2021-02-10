import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';


const UserDetail = (props) => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     axios.get('/users')
    //     .then((response) => {
    //         console.log(response);
    //         const userList = response.data.users;
    //         setUsers(userList);
    //     })
    //     .catch((error) => { 
    //         console.log(error.message);
    //     })
    // }, [])

    const users=props.users

return (
<div>
    <h3>User Details:</h3>
    <ul>
    {users.map((user) => {
        return (<li key={user.id}>Name: {user.name} <li>Email: {user.email}</li></li>)
    })}
    </ul>

</div>) }


    export default UserDetail;