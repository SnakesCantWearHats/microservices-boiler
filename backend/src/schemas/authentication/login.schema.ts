import Joi from '@hapi/joi';

export const loginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required().min(6),
});
