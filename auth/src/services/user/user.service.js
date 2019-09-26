const bcrypt = require('bcrypt');

const UserRepository = require('./user.repository');

const saltRounds = 12;

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}
	
	async createNewUser(name, email, password) {
		if (!name || !email || !password) {
			throw new Error('No name, email or password supplied.');
		}
		const user = await this.userRepository.findUserByNameOrEmail(name, email);
		if (user.length > 0) {
			throw new Error('User already exists');
		}
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		this.userRepository.createUser(name, email, hashedPassword);
	}
}

module.exports = UserService;
