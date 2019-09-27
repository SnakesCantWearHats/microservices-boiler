import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routing';

const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) =>  {
	res.json({ pong: 'pong' });
});

app.get('/', (req, res) => {
	res.json({ service: 'Auth', success: true });
});

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Authentication service is listening on port ${port}`))
