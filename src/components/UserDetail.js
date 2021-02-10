import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';


const UserDetail = (props) => {

return (
<div>
    <h3>User Details:</h3>
    <ul>
    {props.users.map((user) => {
        return (<li key={user.id}>Name: {user.name} <li>Email: {user.email}</li></li>)
    })}
    </ul>

</div>) }


    export default UserDetail;