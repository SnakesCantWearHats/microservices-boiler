import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
	res.json({ done: 'this is sent from backend!' });
});

export default router;
