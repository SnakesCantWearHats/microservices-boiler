import express from 'express';

import container from '../services/container';
import { SERVICE_IDENTIFIERS } from '../contants';
import authentication from '../middleware/authentication';

const router = express.Router();

router.post('/login', authentication, (req, res, next) => {
	console.log('login route');
	res.json({
		service: 'auth',
		success: true
	});
});

router.post('/register', (req, res, next) => {
	const userService = container(SERVICE_IDENTIFIERS.UserService);
	const { name, email, password } = req.body;
	try {
		userService.createNewUser(name, email, password);
	} catch(err) {
		res.json({
			service: 'auth',
			success: false,
			message: err,
		});
	}
	res.json({
		service: 'auth',
		success: true
	});
});

export default router;
