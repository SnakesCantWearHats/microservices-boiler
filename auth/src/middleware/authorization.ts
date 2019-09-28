import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import secret from '../SECRET';
import { tokenUser } from './types';

const authorization = (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.headers['jwt-token']) {
			throw new Error('User isn\'t logged in');
		}
		const token: string = req.headers['jwt-token'].slice(6) as string;
		const decoded: tokenUser = jwt.verify(token, secret) as tokenUser;
		
		res.locals.user = { name: decoded.name, email: decoded.email };
		next();
	} catch (error) {
		res.status(401).json({
			service: 'auth',
			message: error.message,
		})
	}
};

export default authorization;
