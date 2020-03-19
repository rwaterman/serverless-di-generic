import { Types } from './models/types';
import { inject } from 'inversify';
import { ILogger } from './models/interfaces';

export class LogService {
  constructor(@inject(Types.LoggerBasic) private logger: ILogger) {
  }

  public info(msg: string): void {
    this.logger.info(msg);
  }

  public error(err: Error): void {
    this.logger.error(err);
  }
}
