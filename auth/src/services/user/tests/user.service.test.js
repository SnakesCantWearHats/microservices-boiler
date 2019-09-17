const UserRepository = require('../user.repository');
const UserService = require('../user.service');
jest.mock('../user.repository');

describe('Testing user service', () => {
	beforeEach(() => {
		UserRepository.mockClear();
	});

	test('Should call repository constructor once', () => {
		const userService = new UserService();
		expect(UserRepository).toHaveBeenCalledTimes(1);
	});

	test('Should create a new user', async () => {
		const userService = new UserService();

		expect(UserRepository).toHaveBeenCalledTimes(1);

		const name = 'testname';
		const email = 'test@test.com';
		const password = 'password123';
		await userService.createNewUser(name, email, password);

		const mockUserRepositoryInstance = UserRepository.mock.instances[0];
		const mockCreateUser = mockUserRepositoryInstance.createUser;
		expect(mockCreateUser.mock.calls[0][0]).toEqual(name);
		expect(mockCreateUser.mock.calls[0][1]).toEqual(email);
		expect(mockCreateUser.mock.calls[0][2]).not.toEqual(password);

		expect(mockCreateUser).toHaveBeenCalledTimes(1);
	});
});
