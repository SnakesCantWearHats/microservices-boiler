import { Container } from 'inversify';

import { SERVICE_IDENTIFIER } from './constants';
import UserService from './services/user/user.service';
import { IUserService, IUserRepository } from './services/user/user.interface';
import UserRepository from './services/user/user.repository';

const container = new Container();

container.bind<IUserService>(SERVICE_IDENTIFIER.UserService).to(UserService).inSingletonScope();
container.bind<IUserRepository>(SERVICE_IDENTIFIER.UserRepository).to(UserRepository).inSingletonScope();

export default container;
