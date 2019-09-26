const UserService = require('./user/user.service');

const services = {
	UserService: new UserService(),
};

const container = (name) => {
	return services[name];
};

module.exports = container;
