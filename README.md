# Node service boilerplate for fast development
## Info
This is a boiler code for nodeJS service. This projects idea is to have some kind of boiler plate with typescript, inversifyJS, tests, authentication and routing setup for anyone to just clone this repo and start developing whatever they want.

## Setup
Have docker installed and started as a daemon. Clone this repo and `cd` in to it.
`docker-compose up` or just `npm start` will just build and launch the project.
To run tests - `npm run test`.

## Backend
This service has built in authentication via /v1/api/auth/login and /v1/api/auth/register endpoints. These are managed by passport js and have authentication middleware. `passport.authenticate('local')` is used only for login, this strategy looks at the body for email and password, `passport.authenticate('jwt)` is used for protected routes when user is already logged in and has header `Authorization: Bearer <token>`.

This service has inversify, typescript nd joi validation setup.

## License

MIT
