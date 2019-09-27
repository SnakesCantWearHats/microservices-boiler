import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'inversify';

// import UserRepository from './user.repository';
import { IUserService, IUserRepository, IUserDocument } from './user.interface';

const saltRounds = 12;

@injectable()
class UserService implements IUserService {
	// TODO fix this
	@inject('UserRepository') private userRepository: IUserRepository;
	
	async createNewUser(name: string, email: string, password: string): Promise<void> {
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

	async findUserByNameOrEmail(name: string, email: string): Promise<IUserDocument> {
		const user = await this.userRepository.findOneUserByNameOrEmail(name, email);

		if(!user) {
			throw new Error(`User ${name} with email ${email} doesn't exist.`);
		}
		return user;
	}
}

export default UserService;
