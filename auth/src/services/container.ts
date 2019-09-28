import { Container } from 'inversify';

import { SERVICE_IDENTIFIERS } from '../contants';
import UserService from './user/user.service';
import { IUserService, IUserRepository } from './user/user.interface';
import UserRepository from './user/user.repository';

const container = new Container();

container.bind<IUserService>(SERVICE_IDENTIFIERS.UserService).to(UserService).inSingletonScope();
container.bind<IUserRepository>(SERVICE_IDENTIFIERS.UserRepository).to(UserRepository).inSingletonScope();

export default container;
