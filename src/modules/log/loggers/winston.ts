import { injectable } from 'inversify';
import { ILogger } from '../models/interfaces';
import "reflect-metadata";

@injectable()
export class Winston implements ILogger {
  // tslint:disable-next-line:no-console
  public info(msg: string) { console.log(`winston: ${msg}`); }
  // tslint:disable-next-line:no-console
  public error(err: Error) { console.error(`winston: ${err.message}`); }
}
