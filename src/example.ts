import { Context } from 'aws-lambda';
import { LogService } from './modules/log/log.service';
import { injector } from './inversify.config';
import { ILogger, IStorage, ITrace } from './modules/log/models/interfaces';
import { StorageService } from './modules/storage/storage.service';
import { TraceService } from './modules/trace/trace.service';

export async function example(event: any, context: Context) {
  const logger = injector.resolve<ILogger>(LogService);
  const storage = injector.resolve<IStorage>(StorageService);
  const trace = injector.resolve<ITrace>(TraceService);

  try {
    logger.info('Listing the contents of the bucket');
    // tslint:disable-next-line:no-console
    console.log(await storage.list());

    return true;
  } catch (err) {
    logger.error(err);
    throw err;
  }
}


// Demonstrate Central logging
