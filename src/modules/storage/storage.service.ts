import { inject, injectable } from 'inversify';
import { Types } from '../log/models/types';
import { IStorage } from '../log/models/interfaces';

@injectable()
export class StorageService implements IStorage {
  // tslint:disable-next-line:no-empty
  constructor(@inject(Types.Storage) private storage: any) {
  }

  public async list() {
    return this.storage.list();
  }

  public getClient() {
    return this.storage.getClient();
  }
}
