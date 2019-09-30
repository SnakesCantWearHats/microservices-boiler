const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
	res.json({ service: 'Backend', success: true });
});

app.listen(port, () => console.log(`Backend service is listening on port ${port}`))