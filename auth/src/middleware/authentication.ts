import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import container from '../services/container';
import { SERVICE_IDENTIFIERS } from '../contants';
import { IUserService } from '../services/user/user.interface';
import secret from '../SECRET';
import { tokenUser } from './types';


const checkUserAndGenNewToken = async (name: string, email: string, password: string) => {
	const userService = container.get<IUserService>(SERVICE_IDENTIFIERS.UserService);

	const user = await userService.findUserByNameOrEmail(name, email);
	if (await bcrypt.compare(password, user.password)) {
		const token = jwt.sign(
			{ name: user.name, email: user.email },
			secret,
			{ expiresIn: '1h' },
		);
		return { name: user.name, email: user.email, token };
	} else {
		throw new Error('Wrong password.');
	}
};

const authentication = async (req: Request, res: Response, next: NextFunction) => {
	const { name, email, password } = req.body;

	try {
		if ((name || email) && password) {
			const { name: userName, email: userEmail, token } = await checkUserAndGenNewToken(name, email, password);
			res.locals.user = { name: userName, email: userEmail };
			res.append('JWT-Token', `Token-${token}`);
			next();
		}
		if (req.headers['jwt-token']) {
			const token: string = req.headers['jwt-token'].slice(6) as string;
			const decoded: tokenUser = jwt.verify(token, secret) as tokenUser;

			const newToken = jwt.sign(
				{name: decoded.name, email: decoded.email},
				secret,
				{ expiresIn: '1h' },
			);

			res.locals.user = { name: decoded.name, email: decoded.email };
			res.append('JWT-Token', `Token-${newToken}`);
			next();
		}
		throw new Error('No credentials supplied');
	} catch(err) {
		res.status(401).json({
			service: 'auth',
			message: err.message,
		});
	}
};

export default authentication;
