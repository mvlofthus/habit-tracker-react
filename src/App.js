import React, { useState, useEffect } from 'react';
import axios from 'axios';
import galaxy from './galaxy.svg'; 
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail.js';
import TaskList from './components/TaskList.js';
import GoalList from './components/GoalList.js';
import HomeDetail from './components/HomeDetail.js';
import NewTask from './components/NewTask.js';
import { Navbar } from 'react-bootstrap';


function App() {
  
  // Axios calls, all data being distributed by App
  const [errorMessage, setErrorMessage] = useState('');

  // Users
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
  const [categoryRefresh, setCategoryRefresh] = useState(0);

  const categoryRefreshCallback = (update) => {
    setCategoryRefresh(update);
  }

  // Categories
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
  }, [categoryRefresh])

  // Goals
  const [goals, setGoals] = useState([]);
  const [goalCount, setGoalCount] = useState(0)
  const [goalRefresh, setGoalRefresh] = useState(0);

  const goalRefreshCallback = (update) => {
    setGoalRefresh(update);
  }
  
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
  }, [goalRefresh])

  // Tasks
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0)
  const [newestTask, setNewestTask] = useState([]);
  const [taskRefresh, setTaskRefresh] = useState(0);

  const taskRefreshCallback = (update) => {
    setTaskRefresh(update);
  }
  
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
  }, [taskRefresh])


  // React Router
  const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/task-list'>Task List</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/user-detail'>User Preferences</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/new-task'>Add Task</NavLink></li>
      </ul>
    </nav>
  );
  
  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/task-list' component={Tasks}></Route>
      <Route exact path='/user-detail' component={User}></Route>
      <Route exact path='/new-task' component={AddTask}></Route>
    </Switch>
  );

  const Home = () => (
    <div className='home'>
      <HomeDetail goalCount={goalCount} goals={goals} tasks={tasks} categories={categories} newestTask={newestTask} />
    </div>
  );
  
  const Tasks = () => (
    <div className='tasks'>
      <h2>Tasks</h2>
      <TaskList categories={categories} goals={goals} tasks={tasks} />
    </div>
  );
  
  const User = () => (
    <div className = 'user'>
      <UserDetail users={users}/>
      <GoalList categories={categories} goals={goals} goalRefreshCallback={goalRefreshCallback} goalRefresh={goalRefresh} categoryRefreshCallback={categoryRefreshCallback} categoryRefresh={categoryRefresh}/>
    </div>
  );

  const AddTask = () => (
    <div className='new_task'>
      <h2>Enter Details</h2> 
      <NewTask goals={goals} categories={categories} taskRefreshCallback={taskRefreshCallback} taskRefresh={taskRefresh}/>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
        <img src={galaxy} className="App-logo" alt="logo" />
        <h1 className="header-h1">Lifer</h1>
        </div>
      </header>
      <Navigation />
      <Main />
      
      <Navbar bg="light" variant="light" sticky="bottom">
        <Navbar.Text className="footer-text">
        &copy; 2021 Mackenzie Lofthus 
        </Navbar.Text>
        <Navbar.Text  className="ml-auto">
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Navbar.Text>
      </Navbar>

    </div>
  );
}

export default App;
