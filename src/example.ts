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
    await storage.list();

    // tslint:disable-next-line:no-console
    console.log('Returning success');
    return { statusCode: 200, body: JSON.stringify({}) };
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err.message);
    throw err;
  }
}


// Demonstrate Central logging
