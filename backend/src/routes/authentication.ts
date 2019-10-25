import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import container from '../container';
import { SERVICE_IDENTIFIER } from '../constants';
import { IUserService } from '../services/user/user.interface';
import addJwtToHeader from '../middleware/jwt-token';

const router = express.Router();

router.get('/secure', passport.authenticate('jwt'), (req: Request, res: Response) => {
	res.json({ sent: 'You are authorized' });
});

router.post('/login', passport.authenticate('local'), addJwtToHeader, (req: Request, res: Response, next: NextFunction) => {
	
	res.json({
		service: 'auth',
		success: true
	});
});

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
	const { username, email, password } = req.body;
	const userService = container.get<IUserService>(SERVICE_IDENTIFIER.UserService);
	try {
		await userService.createNewUser(username, email, password);
	} catch(err) {
		res.json({
			message: err,
		});
	}
	res.json({
		service: 'auth',
		success: true
	});
});

export default router;
