# Node microservices boiler plate for fast development
WIP
## Info
This is a boiler code for nodeJS microservices. It consists of two microservices, one for authentication (used as a gateway) and second for backend. The project will have nginx server set up for easy routing which will let developer to split up backend in to other microservices with ease.
## Setup
Have docker installed and started as a daemon. Clone this repo and `cd` in to it.
Then launch
```bash
npm start
```

# Auth service
This service is meant to take care of all authorization and authentication. In here developer will have to define entry routes and where those routes should travel in the back-end. There are two middleware functions defined for this authorization (which should only be used in the `/login` route) and authentication which will call next() if token is correct, this middleware should be used in all routes that are not public.

This will just launch `docker-compose up` and build and launch the project