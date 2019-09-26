const User = require('./schema');

class UserRepository {
	constructor() {
		this.foo = 'bar';
	}

	async createUser(name, email, password) {
		const newUser = new User({
			name,
			password,
			email,
		});
		await newUser.save();
	}

	async findUsersByNameOrEmail(name, email) {
		const user = await User.find({
			$or: [
				{
					name
				},
				{
					email
				}
			]
		}).lean();
		return user;
	}

	async findOneUserByNameOrEmail(name, email) {
		const user = await User.findOne({
			$or: [
				{
					name
				},
				{
					email
				}
			]
		}).lean();
		return user;
	}
}

module.exports = UserRepository;
