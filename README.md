# Lifer

Lifer is a modern habit tracker app for the perfectionists among us who thrive on external structure and need a little help keeping the focus on the present. Many of us lost a great deal of structure with covid lockdowns and he shift to working from home, and need a little non-judgmental help in getting back on track.  Lifer celebrates weekly wins with clean and simple data visualization, allows the user to customize categories and weekly goals, and includes a sortable log of all historic entries. 

### Table of Contents
  - [Adding Completed TASKS](#adding-completed-tasks)
  - [Task List](#task-list)
  - [User Preferences](#user-preferences)
  - [Link to Demo](#link-to-demo)
  - [Technologies](#technologies)
  - [Road Map](#road-map)
-- 
## Adding Completed Tasks
By navigating to Add Task, a user will select the date the task was completed, category it belongs to, goal this task is contributing towards, and optional details.  The user can add multiple tasks without redirect for batched entries, and the home page updates with each entry - reflecting progress towards goals and highlighting the most recently completed task.  
<img src='https://media.giphy.com/media/A2a37NriGW7cOcsG7y/giphy.gif' height='350' alt='home page demo' />
<img src='https://media.giphy.com/media/5S25wYoXGXUrQ6IA4x/giphy.gif' height='350' alt='add task demo' />

## Task List
Though our homepage celebrates focusing on the present, users can also view a sortable list of their historic entries by navigating to Task List.  This is useful for viewing more long term progress in certain categories, such as exercise.  
<img src='https://media.giphy.com/media/jJfgCppuyUQFyceZT0/giphy.gif' height="350" alt='task list demo' />

## User Preferences
Users can also update both their list of categories and list of goals. Categories immediately update after entry and can be used to add goals without refreshing the page.  
<img src='https://media.giphy.com/media/AnqDOLxj6il6DIEKL2/giphy.gif' height="350" alt='user preferences demo' />

## Link to Demo
Visit https://youtu.be/YJevYkN8QSY to view the demo presented for Ada Developers Academy February 2021 capstone presentations.  

---

## Technologies

[Lifer web application](https://github.com/mvlofthus/habit-tracker-react) and [Lifer API](https://github.com/mvlofthus/habit-tracker-flask-api) was created with:
Core Technology | version
-----------|-------
JavaScript | ECMAScript2018
React | 17.0.1
Python | 3.9.1
Flask | 1.1.2
MySQL | 8.0.23

Front End Library | version
-----------|-------
@testing-library/jest-dom | 5.11.4
@testing-library/react | 11.1.0
@testing-library/user-event | 12.1.10 
axios | 0.21.1
bootstrap | 4.6.0
luxon | 1.25.0
react-bootstrap | 1.4.3
react-dom | 5.2.0
react-router-dom | 5.2.0
react-scripts | 4.0.1
victory | 35.4.9 
web-vitals | 0.2.4 


Back End Library | version
--------------| ------
alembic | 1.5.4
appdirs | 1.4.4
astroid | 2.4.2
click | 7.1.2
cycler | 0.10.0
distlib | 0.3.1
filelock | 3.0.12
Flask-Cors | 3.0.10
Flask-Ext | 0.1
flask-marshmallow | 0.14.0
Flask-Migrate | 2.6.0
Flask-MySQL | 1.5.2
Flask-MySQLdb | 0.2.0
Flask-SQLAlchemy | 2.4.4
gunicorn | 20.0.4
isort | 5.7.0
itsdangerous | 1.1.0
Jinja2 | 2.11.3
kiwisolver | 1.3.1
lazy-object-proxy | 1.4.3
Mako | 1.1.4
MarkupSafe | 1.1.1
marshmallow | 3.10.0
marshmallow-sqlalchemy | 0.24.1
matplotlib | 3.3.3
mccabe | 0.6.1
mysql-client | 0.0.1
mysqlclient | 2.0.3
numpy | 1.19.5

## Road Map
* Home - Data visualization highlighting this week's goal progress
* Task List - Detailed and sortable list of historic entries
* User Preferences - Customize categories and goals
* Add Task - Enter new tasks with date, category, and optional details

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

2021 Mackenzie Lofthus
