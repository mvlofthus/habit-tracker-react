import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import galaxy from './galaxy.svg'; 
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail.js';
import TaskList from './components/TaskList.js';
import GoalList from './components/GoalList.js';
import HomeDetail from './components/HomeDetail.js';

function App() {

  const [currentTime, setCurrentTime] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  

  useEffect(() => {
    axios.get('/time')
    .then((response) => {
      console.log(response);
      setCurrentTime(response.data.time);
    })
    .catch((error) => { 
      setErrorMessage(error.message);
    })
    }, []);

    const [users, setUsers] = useState([]);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
      axios.get('/users')
      .then((response) => {
        console.log(response);
        const userList = response.data.users;
        setUsers(userList);
        setUserCount(response.data.count);
      })
      .catch((error) => { 
        setErrorMessage(error.message);
      })
    }, [])

    const [categories, setCategories] = useState([]);
    const [categoryCount, setCategoryCount] = useState(0);

    useEffect(() => {
      axios.get('/categories')
      .then((response) => {
        console.log(response);
        const categoryList = response.data.categories;
        setCategories(categoryList);
        setCategoryCount(response.data.count);
      })
      .catch((error) => { 
        setErrorMessage(error.message);
      })
    }, [])

    const [goals, setGoals] = useState([]);
    const [goalCount, setGoalCount] = useState(0)
    
    useEffect(() => {
        axios.get('/goals')
        .then((response) => {
            console.log(response);
            const tempGoals = response.data.goals;
            const tempGoalsCount = response.data.count
            setGoals(tempGoals);
            setGoalCount(tempGoalsCount);
        })
        .catch((error) => { 
            console.log(error.message);
        })
    }, [])

  

    const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/task-list'>Task List</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/goal-list'>Goal List</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/user-detail'>User</NavLink></li>
        </ul>
      </nav>
    );
    
    const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/task-list' component={Tasks}></Route>
        <Route exact path='/goal-list' component={Goals}></Route>
        <Route exact path='/user-detail' component={User}></Route>
      </Switch>
    );


    const Home = () => (
      <div className='home'>
        <h1>This is where we will display data</h1> 
        <HomeDetail/>
      </div>
    );
    
    const Tasks = () => (
      <div className='tasks'>
        <h1>Display all tasks sorted by date, filtered by category, add new, edit by clicking on item</h1>
        <TaskList categories={categories} goals={goals}/>
      </div>
    );
    
    
    const Goals = () => (
      <div className = 'goals'>
        <h1>List of goals, will have option to add/change goals </h1>
        <GoalList categories={categories}/>
      </div>
    );
    
    const User = () => (
      <div className = 'user'>
        <h1>User info, for now list the only existing user</h1>
        <UserDetail users={users}/>
      </div>
    );

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
        <img src={galaxy} className="App-logo" alt="logo" />
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <h1>Lifer</h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> The current time is {currentTime}.</p> */}
        {/* <p> {userCount} Users: </p> */}
        {/* <ul>
          {users.map((user) => {
          return (<li key={user.id}>{user.name} - {user.email} </li>)
        })}
        </ul> */}
        <p> {errorMessage} </p>
        </div>
      </header>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
