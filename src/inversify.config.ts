import { Container, interfaces } from 'inversify';
import { Types } from './modules/log/models/types';
import { ILogger, LSService } from './modules/log/models/interfaces';
import { Winston } from './modules/log/loggers/winston';

// Loggers
const logInjector = new Container();
logInjector.bind<ILogger>(Types.Logger).toDynamicValue((context: interfaces.Context) => {
  return new Winston({ level: 'info', format: 'json', service: LSService.ServiceApi });
});

// Exports
export { logInjector };
