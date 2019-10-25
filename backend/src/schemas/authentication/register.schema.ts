import Joi from '@hapi/joi';

export const registerSchema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().required().min(6),
});
