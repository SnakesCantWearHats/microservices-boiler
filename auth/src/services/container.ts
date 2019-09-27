import UserService from './user/user.service';

const services = {
	UserService: new UserService(),
};

const container = (name) => {
	return services[name];
};

export default container;
