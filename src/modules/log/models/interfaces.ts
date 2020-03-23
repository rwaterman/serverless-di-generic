import { IService } from '../../trace/x-ray.service';

export interface ILogger {
  debug?(msg: string): void;
  error(err: Error): void;
  info(msg: string): void;
  warn?(msg: string): void;
}

export interface IStorage {
  list(): any;
  getClient(): any
}

// tslint:disable-next-line:no-empty-interface
export interface ITrace {
}

export enum LSService {
  ServiceApi = 'service-api',
  ServiceFrontend = 'service-wb'
}

export interface LogConfig {
  level: 'info' | 'error' | 'debug';
  format: 'simple' | 'json'
  transports?: LogTransport[];
  service: LSService;
}

export enum LogFormat {
  json = 'json'
}

export interface LogTransport {
  format: LogFormat;
  target: string;
}
