import { Request, Response, NextFunction } from 'express';

import { ValidationError } from '../errors/validation.error';

export const validateBody = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.validateAsync(req.body);
	} catch (error) {
		throw new ValidationError(error.message);
	}
}

export const validateQuery = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.validateAsync(req.query);
	} catch (error) {
		throw new ValidationError(error.message);
	}
}
