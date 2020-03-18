import { LogService } from './modules/log';

export const Greeter = (name: string) => `Hello ${name}`;

const logger = new LogService();

logger.info('test');
