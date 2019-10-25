import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import container from '../container';
import { SERVICE_IDENTIFIER } from '../constants';
import { IUserService } from '../services/user/user.interface';
import addJwtToHeader from '../middleware/jwt-token';
import { validateBody } from '../middleware/validation';
import { registerSchema } from '../schemas/authentication/register.schema';
import { loginSchema } from '../schemas/authentication/login.schema';

const secureHandler = (req: Request, res: Response) => {
	res.json({ sent: 'You are authorized' });
};

const loginHandler = (req: Request, res: Response) => {
	res.json({
		service: 'auth',
		success: true
	});
}

const registerHandler = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;
	const userService = container.get<IUserService>(SERVICE_IDENTIFIER.UserService);
	try {
		await userService.createNewUser(username, email, password);
	} catch(err) {
		res.json({ message: err });
	}
	res.json({
		service: 'auth',
		success: true
	});
}

const router = express.Router();

router.get('/secure', passport.authenticate('jwt'), secureHandler);

router.post('/login', validateBody(loginSchema), passport.authenticate('local'), addJwtToHeader, loginHandler);

router.post('/register', validateBody(registerSchema), registerHandler);

export default router;
