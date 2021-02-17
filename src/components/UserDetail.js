import React from 'react';


const UserDetail = (props) => {

    return (
    <div>
        {props.users.map((user) => {
            return (<h3 key={user.id}>Hello, {user.name} </h3>)
        })}
    </div>) 
    
}


export default UserDetail;