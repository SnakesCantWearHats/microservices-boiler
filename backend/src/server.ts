import express from 'express';
import bodyParser from 'body-parser';

import db from './mongoose';
import routes from './routing';

const app = express();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connection to backend db succesful')
});

const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
	res.json({ pong: 'pong' });
});

app.use('/', routes);

app.listen(port, () => console.log(`Backend service is listening on port ${port}`))