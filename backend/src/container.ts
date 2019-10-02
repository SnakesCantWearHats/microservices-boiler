import { Container } from 'inversify';

import { SERVICE_IDENTIFIER } from './constants';

const container = new Container();

// container.bind<interface>(SERVICE_IDENTIFIER.service).to(service).inSingletonScope();

export default container;
