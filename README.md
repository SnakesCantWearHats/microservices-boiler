# Node microservices boiler plate for fast development
## Info
This is a boiler code for nodeJS microservices. It consists of two microservices, one for authentication (used as a gateway) and second for backend. The project will have nginx server set up for easy routing which will let developer to split up backend in to other microservices with ease.
## Setup
Have docker installed and started as a daemon. Clone this repo and `cd` in to it.
Then launch
```bash
npm start
```

This will just launch `docker-compose up` and build and launch the project