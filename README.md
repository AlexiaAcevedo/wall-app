# The Wall

The wall is an application that allows users to register, login, and write on a wall.

![pic1](https://user-images.githubusercontent.com/98661499/188015656-c5a1200e-d0cd-41c7-b5c8-9baa7b5fa58e.PNG | width=200)

![pic2](https://user-images.githubusercontent.com/98661499/188015729-8e253fcf-7ce9-4954-b9c2-7bcee1cc1067.PNG)

![pic3](https://user-images.githubusercontent.com/98661499/188015779-8aa10606-2ea4-4531-b97d-2f4511f4f90d.PNG)

![pic4](https://user-images.githubusercontent.com/98661499/188015813-ba74dc21-75dd-4af8-bf27-f41252650156.PNG)


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
    
## Video Demo


