import container from '../../container';
import { IUserService } from '../user.interface';
import { SERVICE_IDENTIFIERS } from '../../../constants';
import { MockUserRepository, document } from './user.repository.mock';

describe('Testing user service', () => {
	const {
		name: existing_name,
		email,
		password,
	} = document;
	const name = 'testname';

	beforeEach(() => {
		container.rebind(SERVICE_IDENTIFIERS.UserRepository).toConstantValue(new MockUserRepository);
	});

	it('Should return an error only if trying to add user that already exist', async () => {
		const userService = container.get<IUserService>(SERVICE_IDENTIFIERS.UserService);

		await expect(userService.createNewUser(existing_name, email, password)).rejects.toThrow();
		let throwsError = false; // Because .rejects.not.toThrow() doesn't work...
		try {
			await userService.createNewUser(name, email, password);
		} catch (err) {
			throwsError = true;
		}
		expect(throwsError).toEqual(false);
	});

	it('Should find existing user, or return error if user doesn\'t exist', async () => {
		const userService = container.get<IUserService>(SERVICE_IDENTIFIERS.UserService);
		
		await expect(userService.findUserByNameOrEmail(name, email)).rejects.toThrow();
		
		await expect(await userService.findUserByNameOrEmail(existing_name, email)).toEqual(document);
	});
});
