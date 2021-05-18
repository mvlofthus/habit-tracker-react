# Lifer

Lifer is a modern habit tracker app for the perfectionists among us who thrive on external structure and need a little help keeping the focus on the present. Lifer celebrates weekly wins with clean and simple data visualization, allows you to customize categories and weekly goals, and includes a sortable log for all historic entries. 

<iframe src="https://giphy.com/embed/A2a37NriGW7cOcsG7y" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/home-page-A2a37NriGW7cOcsG7y">via GIPHY</a></p>

## Adding Completed Activities
By navigating to Add Task, a user can add as many activities as they would like, the home page updates immediately and reflects progress towards goals and highlights the most recently completed task.  


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
* Payments: Complete Stripe integration for in-app payments
* Owner Dashboard: List of plant sitters to be sorted by distance to owner
* Inbox: Badge for unread messages
* Request List: Styling for pending/unconfirmed requests.
* Owner Dashboard: Pagination of list of sitters.
* Sitter Dashboard: Map of owners that have sent requests (marker color == request status)
* Authentication: OAuth integration
