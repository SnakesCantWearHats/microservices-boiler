const express = require('express');

const container = require('../services/container');
const { SERVICE_IDENTIFIERS } = require('../contants');
const authentication = require('../middleware/authentication');

const router = express.Router();

router.post('/login', authentication, (req, res, next) => {
	console.log('login route');
	res.json({
		service: 'auth',
		success: true
	});
});

router.post('/register', (req, res, next) => {
	const userService = container(SERVICE_IDENTIFIERS.UserService);
	const { name, email, password } = req.body;
	try {
		userService.createNewUser(name, email, password);
	} catch(err) {
		res.json({
			service: 'auth',
			success: false,
			message: err,
		});
	}
	res.json({
		service: 'auth',
		success: true
	});
});

module.exports = router;
