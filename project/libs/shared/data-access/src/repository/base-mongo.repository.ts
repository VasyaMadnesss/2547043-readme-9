import { Document, Model, UpdateQuery } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

import { Entity, StorableEntity, EntityFactory } from '@project/shared-core';
import { Repository } from './repository.interface';

export abstract class BaseMongoRepository<T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>, DocumentType extends Document> implements Repository<T> {

  constructor(
    protected entityFactory: EntityFactory<T>,
    protected readonly model: Model<DocumentType>,
  ) { }

  protected createEntityFromDocument(document: DocumentType): T | null {
    if (!document) {
      return null;
    }
    const documentPOJO = document.toObject({ versionKey: false });
    const documentId = document._id.toString();
    const plainObject = { id: documentId, ...documentPOJO } as ReturnType<T['toPOJO']>;
    return this.entityFactory.create(plainObject);
  }

  public async findById(id: T['id']): Promise<T | null> {
    const document = await this.model.findById(id).exec();
    if (document) {
      return this.createEntityFromDocument(document);
    }
    return null;
  }

  public async save(entity: T): Promise<void> {
    const newDocument = new this.model(entity.toPOJO());
    await newDocument.save();
    entity.id = newDocument._id.toString();
  }

  public async update(entity: T): Promise<void> {
    const updatedDocument = await this.model.findByIdAndUpdate(
      entity.id,
      entity.toPOJO() as UpdateQuery<DocumentType>,
      { new: true, runValidators: true }
    )
      .exec();

    if (!updatedDocument) {
      throw new NotFoundException(`Entity with id ${entity.id} not found`);
    }
  }

  public async deleteById(id: T['id']): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(id).exec();
    if (!deletedDocument) {
      throw new NotFoundException(`Entity with id ${id} not found.`);
    }
  }
}
