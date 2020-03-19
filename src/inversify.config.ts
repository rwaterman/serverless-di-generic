import { Container } from "inversify";
import { Types } from './modules/log/models/types';
import { ILogger } from './modules/log/models/interfaces';
import { Basic } from './modules/log/loggers/basic';
import { Winston } from './modules/log/loggers/winston';
import { Test } from './modules/log/loggers/test';

// Loggers
const logInjector = new Container();
logInjector.bind<ILogger>(Types.LoggerBasic).to(Basic);
logInjector.bind<ILogger>(Types.LoggerTest).to(Test);
logInjector.bind<ILogger>(Types.LoggerWinston).to(Winston);
// logInjector.bind<ILogger>(Types.LoggerPino).to(LoggerPino);


// Exports
export { logInjector };
