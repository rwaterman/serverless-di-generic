import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class LoggerBase {
  protected abstract validateConfig(): void;
}
