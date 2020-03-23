import { S3 } from 'aws-sdk';
import * as AWSXRay from 'aws-xray-sdk';
import { injectable } from 'inversify';
import { ITrace } from '../log/models/interfaces';
import * as AWS_SDK from 'aws-sdk';
import * as AWS_XRAY from 'aws-xray-sdk';
import { PatchedAWS } from 'aws-xray-sdk-core/lib/patchers/aws_p';

export interface IService {
  name: string;
  instance: any;
}

interface IXRayService extends IService {
  client: any;
}

@injectable()
export class XRayService implements ITrace {
  private services: IXRayService[] = [];
  private xray: PatchedAWS;

  constructor() {
    this.xray = AWS_XRAY.captureAWS(AWS_SDK);
  }
}
