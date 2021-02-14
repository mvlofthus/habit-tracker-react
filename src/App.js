import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import galaxy from './galaxy.svg'; 
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail.js';
import TaskList from './components/TaskList.js';
import GoalList from './components/GoalList.js';
import HomeDetail from './components/HomeDetail.js';
import NewTaskPopup from './components/NewTaskPopup.js'
import NewTask from './components/NewTask.js'

function App() {

// FIRST TO CUT FEATURES: 
  // add in login? 
  // add in PWA?? Bootstrap?? 
 
 
// TO DO 
// add in icon on nav bar for 'login'
// add an icon for new task



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
        console.log(categoryList);
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

    const [tasks, setTasks] = useState([]);
    const [taskCount, setTaskCount] = useState(0)
    const [newestTask, setNewestTask] = useState([]);
    
    useEffect(() => {
        axios.get('/tasks')
        .then((response) => {
            console.log(response);
            const tempTasks = response.data.tasks;
            const tempTaskCount = response.data.count
            setTasks(tempTasks);
            setTaskCount(tempTaskCount);
            const sortedTasks = tempTasks.sort( function (a,b) {return new Date(a.date) - new Date(b.date)});
            const tempNewest = sortedTasks.slice(-1 );
            setNewestTask(tempNewest);
            console.log(tempNewest);
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
          <li><NavLink exact activeClassName="current" to='/new-task'>Add Task</NavLink></li>
        </ul>
      </nav>
    );
    
    const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/task-list' component={Tasks}></Route>
        <Route exact path='/goal-list' component={Goals}></Route>
        <Route exact path='/user-detail' component={User}></Route>
        <Route exact path='/new-task' component={AddTask}></Route>
      </Switch>
    );


    const Home = () => (
      <div className='home'>
        <h1>This is where we will display data</h1> 
        <HomeDetail goalCount={goalCount} goals={goals} tasks={tasks} categories={categories} newestTask={newestTask} />
      </div>
    );
    
    const Tasks = () => (
      <div className='tasks'>
        <h1>Display all tasks sorted by date, filtered by category, add new, edit by clicking on item</h1>
        <TaskList categories={categories} goals={goals} tasks={tasks} />
      </div>
    );
    
    
    const Goals = () => (
      <div className = 'goals'>
        <h1>List of goals, will have option to add/change goals </h1>
        <GoalList categories={categories} goals={goals}/>
      </div>
    );
    
    const User = () => (
      <div className = 'user'>
        <h1>User info, for now list the only existing user</h1>
        <UserDetail users={users}/>
      </div>
    );

    const AddTask = () => (
      <div className='new_task'>
        <h1>Form goes here</h1> 
        <NewTask goals={goals} categories={categories} />
      </div>
    );

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
        <img src={galaxy} className="App-logo" alt="logo" />
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <h1>Lifer</h1>
        </div>
      </header>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
