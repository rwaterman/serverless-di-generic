import { injectable } from 'inversify';
import { ILogger } from '../models/interfaces';
import "reflect-metadata";
import { LoggerBase } from './base';

@injectable()
export class Basic extends LoggerBase implements ILogger {
  // tslint:disable-next-line:no-console
  public info(msg: string) { console.log(`basic: ${msg}`); }
  // tslint:disable-next-line:no-console
  public error(err: Error) { console.error(`basic: ${err.message}`); }

  // tslint:disable-next-line:no-empty
  protected validateConfig(): void {
  }
}
