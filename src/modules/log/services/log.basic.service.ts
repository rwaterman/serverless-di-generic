import * as fs from 'fs';
import { LogBaseService } from './log.base.service';

export class LogBasicService extends LogBaseService {
  private errors: any;
  private writer: any;
  constructor() {
    super();
    this.writer = fs.createWriteStream('applog.txt');
    this.errors = fs.createWriteStream('errlog.txt');
  }

  public info(msg: string) {
    this.writer.write('hello world');
  }

  public async error(err: Error) {
    this.errors.write(err);
    // tslint:disable-next-line:no-console
    console.error(err);
  }
}
