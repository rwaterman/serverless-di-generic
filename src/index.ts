import { logInjector } from './inversify.config';
import { LogService } from './modules/log/log.service';
import { ILogger } from './modules/log/models/interfaces';

const logger = logInjector.resolve<ILogger>(LogService);
logger.info('test');
logger.error(new Error('fake error'));
