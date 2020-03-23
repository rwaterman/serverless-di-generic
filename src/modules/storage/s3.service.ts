import * as AWS_SDK from 'aws-sdk';
import { injectable } from 'inversify';
import { IStorage } from '../log/models/interfaces';

@injectable()
export class S3Service implements IStorage {
  private readonly s3: AWS_SDK.S3;
  public static apiVersion = '2006-03-01';

  constructor() {
    this.s3 = new AWS_SDK.S3({ apiVersion: S3Service.apiVersion });
  }

  public async list() {
    return this.s3.listBuckets().promise();
  }

  public getClient():any {
    return this.s3;
  }
}
