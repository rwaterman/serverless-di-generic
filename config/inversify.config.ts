import { Container, interfaces } from 'inversify';
import { Types } from '../src/modules/log/models/types';
import { ILogger, IStorage, ITrace, LSService } from '../src/modules/log/models/interfaces';
import { Winston } from '../src/modules/log/loggers/winston';
import { S3Service } from '../src/modules/storage/s3.service';
import { XRayService } from '../src/modules/trace/x-ray.service';

const injector = new Container();

injector.bind<ILogger>(Types.Logger).toDynamicValue((context: interfaces.Context) => {
  return new Winston({ level: 'info', format: 'json', service: LSService.ServiceApi });
});

injector.bind<IStorage>(Types.Storage).to(S3Service);

injector.bind<ITrace>(Types.Trace).to(XRayService);

// Exports
export { injector };
