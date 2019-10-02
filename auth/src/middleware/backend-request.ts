import axios, { AxiosRequestConfig } from 'axios';

import { BACKEND_URL } from '../constants';
import { Request, Response, NextFunction } from 'express';

const backendInstance = axios.create({
	baseURL: BACKEND_URL,
});

export const backendRequest = (config: AxiosRequestConfig) => async (req: Request, res: Response, next: NextFunction) => {
	const response = await backendInstance(config);
	res.locals.backend = response.data;
	next();
}

export const backendRequestSend = (config: AxiosRequestConfig) => async (req: Request, res: Response, next: NextFunction) => {
	const response = await backendInstance(config);
	res.json(response.data);
}
