export const Greeter = (name: string) => `Hello ${name}`;

import { Types } from './modules/log/models/types';
import { logInjector } from "./inversify.config";
import { ILogger } from "./modules/log/models/interfaces";
import { LogService } from './modules/log/log.service';

const loggerBasic = new LogService(logInjector.get<ILogger>(Types.LoggerBasic));
loggerBasic.info('info');
loggerBasic.error(new Error('fake error'));

const loggerWinston = new LogService(logInjector.get<ILogger>(Types.LoggerWinston));
loggerWinston.info('info');
loggerWinston.error(new Error('fake error'));


const loggerTest = new LogService(logInjector.get<ILogger>(Types.LoggerTest));
loggerTest.info('info');
loggerTest.error(new Error('fake error'));
