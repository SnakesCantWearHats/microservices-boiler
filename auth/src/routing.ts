import express, { IRouter, Application } from 'express';

import authRoutes from './routes/authentication';
import testRoutes from './routes/test';

const router:IRouter<Application> = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testRoutes);

export default router;
