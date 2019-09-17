const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./src/routing');
const db = require('./src/mongoose');

const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	console.log('authentication got request');
	res.json({ service: 'Auth', success: true });
});

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Authentication service is listening on port ${port}`))
