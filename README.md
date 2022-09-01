# The Wall

The wall is an application that allows users to register, login, and write on a wall.

## Getting Started
### Setting Up Backend

    1. cd wall-app/backend
    2. pip install -r requirements.txt
    3. python manage.py runserver

### Setting Up Frontend
    
    1. cd wall-app/client
    2. npm install
    3. npm start


## Features
- Registration and Login: Anonymous users can create a new user and this new user receives a welcome email. New users can then log in.
- Wall (authed):  After logging in, a user can post messages on the site-wide wall, similar to a facebook wall except there is only 1 wall for the entire site.  
- Wall (guest): Guests as well as authed users can see all of the messages on the wall.

## Tech Info
- Backend - REST API built using Django (Python)
- Frontend - AJAX-based website using React (JavaScript)
    - Styled Components
    - React Smooth Scroll
    - React Icons
    - Fully responsive - mobile optimized
