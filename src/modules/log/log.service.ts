import { Types } from './models/types';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ILogger } from './models/interfaces';

@injectable()
export class LogService implements ILogger {
  constructor(@inject(Types.Logger) public logger: ILogger) {
  }

  public info(msg: string): void {
    this.logger.info(msg);
  }

  public error(err: Error): void {
    this.logger.error(err);
  }
}
