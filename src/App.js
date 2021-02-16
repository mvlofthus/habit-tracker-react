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


  const url = "http://localhost:5000";
  const ec2 = "https://18.222.39.140:8000";
  const [errorMessage, setErrorMessage] = useState('');

  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios.get(`${ec2}/users/`)
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

  useEffect(() => {
    axios.get(`${ec2}/categories/`)
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

  const [goals, setGoals] = useState([]);
  const [goalCount, setGoalCount] = useState(0)
  const [goalRefresh, setGoalRefresh] = useState(0);

  const goalRefreshCallback = (update) => {
    setGoalRefresh(update);
  }
  
  
  useEffect(() => {
      axios.get(`${ec2}/goals/`)
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

  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0)
  const [newestTask, setNewestTask] = useState([]);
  const [taskRefresh, setTaskRefresh] = useState(0);

  const taskRefreshCallback = (update) => {
    setTaskRefresh(update);
  }
  
  useEffect(() => {
      axios.get(`${ec2}/tasks/`)
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





  const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/task-list'>Task List</NavLink></li>
        {/* <li><NavLink exact activeClassName="current" to='/goal-list'>Goal List</NavLink></li> */}
        <li><NavLink exact activeClassName="current" to='/user-detail'>User Preferences</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/new-task'>Add Task</NavLink></li>
      </ul>
    </nav>
  );
  
  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/task-list' component={Tasks}></Route>
      {/* <Route exact path='/goal-list' component={Goals}></Route> */}
      <Route exact path='/user-detail' component={User}></Route>
      <Route exact path='/new-task' component={AddTask}></Route>
    </Switch>
  );


  const Home = () => (
    <div className='home'>
      {/* <h2>Goal Progress for Week of {DateTime.local().toLocaleString(DateTime.DATE_FULL)}</h2>  */}
      <HomeDetail goalCount={goalCount} goals={goals} tasks={tasks} categories={categories} newestTask={newestTask} />
    </div>
  );
  
  const Tasks = () => (
    <div className='tasks'>
      <h2>Tasks</h2>
      <TaskList categories={categories} goals={goals} tasks={tasks} />
    </div>
  );
  
  
  // const Goals = () => (
  //   <div className = 'goals'>
  //     <h2>List of goals, will have option to add/change goals </h2>
  //     <GoalList categories={categories} goals={goals}/>
  //   </div>
  // );
  
  const User = () => (
    <div className = 'user'>
      {/* <h2>User info, for now list the only existing user</h2> */}
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
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
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
          
        </Navbar.Text>
      </Navbar>

    </div>
  );
}

export default App;
