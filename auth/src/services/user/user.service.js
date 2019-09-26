const bcrypt = require('bcrypt');

const UserRepository = require('./user.repository');

const saltRounds = 12;

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}
	
	async createNewUser(name, email, password) {
		if (!name || !email || !password) {
			throw new Error('No name, email and/or password supplied.');
		}
		const users = await this.userRepository.findUsersByNameOrEmail(name, email);
		if (users.length > 0) {
			throw new Error('User already exists.');
		}
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		this.userRepository.createUser(name, email, hashedPassword);
	}

	async findUserByNameOrEmail(name, email) {
		const user = await this.userRepository.findOneUserByNameOrEmail(name, email);

		if(!user) {
			throw new Error(`User ${name} with email ${email} doesn't exist.`);
		}
		console.log(user);
		return user;
	}
}

module.exports = UserService;
