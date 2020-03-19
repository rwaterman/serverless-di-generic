import { inject, injectable } from 'inversify';
import { ILogger, LogConfig } from '../models/interfaces';
import 'reflect-metadata';
import * as winston from 'winston';
import { LoggerBase } from './base';
import * as logform from 'logform';
import * as Transport from 'winston-transport';
import { logFormat, logLevel } from '../models/defaults';
import { Types } from '../models/types';

@injectable()
export class Winston extends LoggerBase implements ILogger {
  private logger: winston.Logger;

  constructor(private config: LogConfig) {
    super();

    this.validateConfig();

    this.logger = winston.createLogger({
      level: this.getLogLevel(),
      format: this.getLogFormat(),
      defaultMeta: { service: this.config.service },
      transports: this.configureTransports()
    });
  }

  public info(msg: string) {
    this.logger.info(msg);
  }

  public error(err: Error) {
    this.logger.error(err);
  }

  protected configureTransports(): Transport[] {
    const transports = [
      new winston.transports.Console({
          format: winston.format[this.config.format](),
        }
      )
    ];

    for (const transport of (this.config.transports || [])) {
      switch (transport.target) {
        case 'todo':
          break;
        default:
          throw new Error('Invalid Transport target');
      }
    }

    return transports;
  }

  private getLogFormat(): logform.Format {
    switch (logFormat) {
      case 'json':
        return winston.format.json();
      case 'simple':
        return winston.format.simple();
      default:
        throw new Error(`Invalid Log Format: ${logFormat}`);
    }
  }

  private getLogLevel(): string {
    switch (logLevel) {
      case 'info':
        return 'info';
      case 'error':
        return 'error';
      default:
        throw new Error(`Invalid Log Format: ${logLevel}`);
    }
  }

  protected validateConfig(): void {
    return;
  }
}
