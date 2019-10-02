# Node microservices boilerplate for fast development
## Info
This is a boiler code for nodeJS microservices. It consists of two microservices, one for authentication (used as a gateway) and second for backend. Also both microservices uses different dockerized instances of mongoDB. This projects idea is to have some kind of boiler plate with typescript, inversifyJS, tests, authentication and routing setup for anyone to just clone this repo and start developing whatever one wants.

## Setup
Have docker installed and started as a daemon. Clone this repo and `cd` in to it.
`docker-compose up` or just `npm start` will just build and launch the project.
To run tests - `npm run test`, or if you want to run some any one of the microservices tests run `npm run test:<microservice>`

## Auth service
This service is meant to take care of all authorization and authentication. In here developer will have to define entry routes and where those routes should travel in the back-end. For this passport middleware should be used. `passport.authenticate('local')` is used only for login, this strategy looks at the body for email and password, `passport.authenticate('jwt)` is used for protected routes when user is already logged in and has header `Authorization: Bearer <token>`.

## Backend
This microservice is supposed to be just the general server for initial development, where everything else goes and which could be separated in to different microservices later on.

## License

MIT
