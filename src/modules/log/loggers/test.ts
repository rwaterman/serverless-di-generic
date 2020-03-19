import { injectable } from 'inversify';
import { ILogger } from '../models/interfaces';
import "reflect-metadata";

@injectable()
export class Test implements ILogger {
  // tslint:disable-next-line:no-empty
  public info(msg: string): void {};
  // tslint:disable-next-line:no-empty
  public error(err: Error): void {};
}
