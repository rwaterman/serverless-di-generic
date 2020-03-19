export interface ILogger {
  debug?(msg: string): void
  error(err: Error): void;
  fatal?(err: Error): void
  info(msg: string): void;
  warn?(msg: string): void
}
