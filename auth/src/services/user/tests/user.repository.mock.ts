import { injectable } from 'inversify';
import { IUserRepository, IUserDocument } from '../user.interface';
import { ObjectId } from 'bson';

const _id: ObjectId = '12342233' as any;
export const document: IUserDocument = {
	_id,
	name: 'user_exists',
	role: 'Normal',
	email: 'user_exists@test.com',
	password: '123432'
} as any;

@injectable()
export class MockUserRepository implements IUserRepository {
	public async createUser(name: string, email: string, password: string): Promise<void> {
		return new Promise((resolve => resolve()));
	}
	public async findUsersByNameOrEmail(name: string, email: string): Promise<IUserDocument[]> {
		if (email === document.email) {
			const documents: IUserDocument[] = [
				document
			] as any;
			return new Promise(resolve => resolve(documents));
		}
		return new Promise(resolve => resolve([]));
	}

	public async findUserByEmail(email: string): Promise<IUserDocument | null> {
		if (email === document.email) {
			return new Promise(resolve => resolve(document));
		}
		return new Promise(resolve => resolve(null));
	}
}
