import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';

import passport from './middleware/passport';
import routes from './routing';
import db from './mongoose';

const app = express();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connection succesful');
});

const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'super secret secret' }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.get('/ping', (req, res) =>  {
	res.json({ pong: 'pong' });
});

app.get('/', (req, res) => {
	res.json({ service: 'Auth', success: true });
});

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Authentication service is listening on port ${port}`))
