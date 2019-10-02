import express from 'express';

import { backendRequestSend } from '../middleware/backend-request';
import { Method } from 'axios';

const router = express.Router();

const config = {
	url: '/test',
	method: 'get' as Method,
}

router.get('/', backendRequestSend(config));

export default router;
