import { Container, interfaces } from 'inversify';
import { Types } from './modules/log/models/types';
import { ILogger, IStorage, ITrace, LSService } from './modules/log/models/interfaces';
import { Winston } from './modules/log/loggers/winston';
import { S3Service } from './modules/storage/s3.service';
import { XRayService } from './modules/trace/x-ray.service';

const injector = new Container();

injector.bind<ILogger>(Types.Logger).toDynamicValue((context: interfaces.Context) => {
  return new Winston({ level: 'info', format: 'json', service: LSService.ServiceApi });
});

injector.bind<IStorage>(Types.Storage).to(S3Service);

injector.bind<ITrace>(Types.Trace).to(XRayService);

// Exports
export { injector };
