import { injectable } from 'inversify';
import { ILogger } from '../models/interfaces';
import "reflect-metadata";
import { LoggerBase } from './base';

@injectable()
export class Test extends LoggerBase implements ILogger {
  // tslint:disable-next-line:no-empty
  public info(msg: string): void {};
  // tslint:disable-next-line:no-empty
  public error(err: Error): void {};

  // tslint:disable-next-line:no-empty
  protected validateConfig(): void {
  }
}
