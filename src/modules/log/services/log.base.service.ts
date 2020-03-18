export abstract class LogBaseService {
  abstract info(msg: string): void
  abstract error(err: Error): void
}
