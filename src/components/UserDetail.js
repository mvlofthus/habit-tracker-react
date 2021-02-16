import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';


const UserDetail = (props) => {

return (
<div>
    {props.users.map((user) => {
        return (<h3 key={user.id}>Hello, {user.name} </h3>)
    })}
</div>) }


    export default UserDetail;