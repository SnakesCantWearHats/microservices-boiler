import express, { IRouter, Application } from 'express';

import authRoutes from './routes/authentication';

const router:IRouter<Application> = express.Router();

router.use('/auth', authRoutes);

export default router;

