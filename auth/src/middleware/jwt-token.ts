import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import secret from '../SECRET';

const addJwtToHeader = async (req: Request, res: Response, next: NextFunction) => {
	const { email, role } = req.user as any;
	const token = jwt.sign(
		{email, role},
		secret,
		{ expiresIn: '1h' },
	);
	res.set('Authorization', `Bearer ${token}`);
	next();
};

export default addJwtToHeader;
