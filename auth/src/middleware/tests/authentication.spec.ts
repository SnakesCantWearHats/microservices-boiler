// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// import container from '../../services/container';
// import { SERVICE_IDENTIFIERS } from '../../constants';
// import { IUserService } from '../../services/user/user.interface';
// import secret from '../../SECRET';

describe('Testing authentication middleware', () => {
	// const testExistingName = 'user_exists';
	// const testName = 'test_name';
	// const testEmail = 'test@test.com';
	// const testPassword = 'xd123';
	// let userService: IUserService;

	// beforeEach(() => {
	// 	Object.defineProperty(bcrypt, 'compare', {value: jest.fn(() => true)});
	// 	userService = container.get(SERVICE_IDENTIFIERS.UserService);
	// 	userService.findUserByNameOrEmail = jest.fn((name, email) => {
	// 		if (name === testExistingName) {
	// 			return {
	// 				name,
	// 				email,
	// 				password: testPassword,
	// 			} as any;
	// 		}
	// 		throw new Error('No such user');
	// 	});
	// });

	it('Should add actual test', () => {
		expect(true).toEqual(true);
	});

	// it('checkUserAndGenNewToken should return error if given password is not correct', async () => {
	// 	Object.defineProperty(bcrypt, 'compare', {value: jest.fn(() => false)});
	// 	await expect(checkUserAndGenNewToken(testExistingName, testEmail, 'bad_password')).rejects.toThrow();
	// });

	// it('checkUserAndGenNewToken should check if user exists, if exists return new token else throw an error', async () => {
	// 	const { name, email, token } = await checkUserAndGenNewToken(testExistingName, testEmail, testPassword);
	// 	expect(name).toEqual(testExistingName);
	// 	expect(email).toEqual(testEmail);
	// 	expect(jwt.verify(token, secret)).toBeTruthy();
	// 	await expect(checkUserAndGenNewToken(testName, testEmail, testPassword)).rejects.toThrow();
	// });

	// it('Should ');
});
