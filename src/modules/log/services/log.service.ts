import { LogBasicService} from './log.basic.service';

export class LogService {
  private logger: LogBasicService;
  constructor() {
    this.logger = new LogBasicService();
  }

  info(msg: string) {
    this.logger.info(msg);
  }
}
