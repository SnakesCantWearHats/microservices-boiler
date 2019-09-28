import express from 'express';

import container from '../services/container';
import { SERVICE_IDENTIFIERS } from '../contants';
import authentication from '../middleware/authentication';
import { IUserService } from '../services/user/user.interface';

const router = express.Router();

router.post('/login', authentication, (req, res, next) => {
	res.json({
		service: 'auth',
		success: true
	});
});

router.post('/register', async (req, res, next) => {
	const { name, email, password } = req.body;
	const userService = container.get<IUserService>(SERVICE_IDENTIFIERS.UserService);
	try {
		await userService.createNewUser(name, email, password);
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
