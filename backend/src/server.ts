import express from 'express';
import bodyParser from 'body-parser';

import db from './mongoose';

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

app.get('/', (req, res) => {
	res.json({ service: 'Backend', success: true });
});

app.listen(port, () => console.log(`Backend service is listening on port ${port}`))