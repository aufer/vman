import * as mongodb from 'mongodb';
import { Collection, MongoClient } from 'mongodb';
import { Store } from './store.interface';
import { VmResource } from '../utils';

export abstract class MongoStore<T extends VmResource> implements Store<T> {
  protected readonly URI = 'mongodb://localhost:27017';
  protected readonly DB = 'vman';
  protected entityType: string;
  protected client: MongoClient;
  protected collection: Collection;

  protected constructor(type: string) {
    this.entityType = type;
  }

  async add(entry: T): Promise<void> {
    const collection = await this.connectIfNot();
    await collection.insertOne(entry);
  }

  async delete(id: string): Promise<void> {
    const collection = await this.connectIfNot();
    await collection.deleteOne({id});
  }

  async findAll(): Promise<T[]> {
    const collection = await this.connectIfNot();
    return await collection.find().toArray();
  }

  async findById(id: string): Promise<T> {
    const collection = await this.connectIfNot();
    return await collection.findOne({id});
  }

  async update(id: string, item: T): Promise<void> {
    const collection = await this.connectIfNot();
    await collection.replaceOne({id}, item);
  }

  private async connectIfNot() {
    if (!this.client) {
      this.client = await mongodb.MongoClient.connect(this.URI);
    }
    if (!this.collection) {
      this.collection = this.client.db(this.DB).collection(this.entityType);
    }

    return this.collection;
  }
}
