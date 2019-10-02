import express, { IRouter, Application } from 'express';

import testRoutes from './routes/test';

const router:IRouter<Application> = express.Router();

router.use('/test', testRoutes);

export default router;
