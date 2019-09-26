const UserRepository = require('../user.repository');
const UserService = require('../user.service');
jest.mock('../user.repository');

describe('Testing user service', () => {
	const name = 'testname';
	const email = 'test@test.com';
	const password = 'password123';
	beforeEach(() => {
		UserRepository.mockClear();
	});

	it('Should call repository constructor once', () => {
		const userService = new UserService();
		expect(UserRepository).toHaveBeenCalledTimes(1);
	});

	it('Should call createNewUser method once and call user repository with same params but different password', async () => {
		const userService = new UserService();
		jest.spyOn(userService.userRepository, 'findUsersByNameOrEmail').mockImplementation(() => []);

		expect(UserRepository).toHaveBeenCalledTimes(1);

		await userService.createNewUser(name, email, password);

		const mockUserRepositoryInstance = UserRepository.mock.instances[0];
		const mockCreateUser = mockUserRepositoryInstance.createUser;
		expect(mockCreateUser.mock.calls[0][0]).toEqual(name);
		expect(mockCreateUser.mock.calls[0][1]).toEqual(email);
		expect(mockCreateUser.mock.calls[0][2]).not.toEqual(password);

		expect(mockCreateUser).toHaveBeenCalledTimes(1);
	});

	it('Should return an error if trying to add user that already exist', async () => {
		const userService = new UserService();
		jest.spyOn(userService.userRepository, 'findUsersByNameOrEmail').mockImplementation(() => [{name, email}]);

		// await expect(userService.createNewUser(name, email, password)).toThrow();
		await expect(userService.createNewUser(name, email, password)).rejects.toThrow();
	});

	it('Should find existing user, or return error if user doesn\'t exist', async () => {
		const userService = new UserService();
		jest.spyOn(userService.userRepository, 'findOneUserByNameOrEmail').mockImplementation((name) => name === 'user_exists' ? {name, email} : null);

		await expect(userService.findUserByNameOrEmail(name, email)).rejects.toThrow();
		
		await expect(await userService.findUserByNameOrEmail('user_exists')).toEqual({ name: 'user_exists', email });
	});
});
