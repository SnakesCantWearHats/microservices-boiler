const express = require('express');

const UserService = require('../services/user/user.service');

const router = express.Router();

router.post('/login', (req, res, next) => {
	console.log('login route');
	res.json({
		service: 'auth',
		success: true
	});
});

router.post('/register', (req, res, next) => {
	const userService = new UserService();
	try {
		userService.createNewUser(req.body.name, req.body.email, req.body.password);
	} catch(err) {
		console.log(err);
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
