import jwt from 'jsonwebtoken';

import secret from '../SECRET';

const authorization = (req, res, next) => {
	try {
		if (!req.headers['jwt-token']) {
			throw new Error('User isn\'t logged in');
		}
		const token = req.headers['jwt-token'].slice(6);
		const decoded = jwt.verify(token, secret);
		
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
