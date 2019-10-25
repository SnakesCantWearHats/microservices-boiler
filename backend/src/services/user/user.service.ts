import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'inversify';

import { IUserService, IUserRepository, IUserDocument } from './user.interface';
import { SERVICE_IDENTIFIER } from '../../constants';

const saltRounds = 12;

@injectable()
class UserService implements IUserService {
	@inject(SERVICE_IDENTIFIER.UserRepository) private userRepository: IUserRepository;

	public async createNewUser(name: string, email: string, password: string): Promise<void> {
		if (!name || !email || !password) {
			throw new Error('No name, email and/or password supplied.');
		}
		const users = await this.userRepository.findUsersByNameOrEmail(name.toLowerCase(), email.toLowerCase());
		if (users.length > 0) {
			throw new Error('User already exists.');
		}
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		this.userRepository.createUser(name.toLowerCase(), email.toLowerCase(), hashedPassword);
	}

	public async findUserByEmail(email: string): Promise<IUserDocument> {
		const user = await this.userRepository.findUserByEmail(email.toLowerCase());

		if (!user) {
			throw new Error(`User with email ${email} does not exist.`);
		}
		return user;
	}
}

export default UserService;
