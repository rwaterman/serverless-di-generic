import { inject, injectable } from 'inversify';
import { Types } from '../log/models/types';
import { IService } from './x-ray.service';
import { ITrace } from '../log/models/interfaces';

@injectable()
export class TraceService implements ITrace {
  constructor(@inject(Types.Trace) private trace: any) {
  }
}
