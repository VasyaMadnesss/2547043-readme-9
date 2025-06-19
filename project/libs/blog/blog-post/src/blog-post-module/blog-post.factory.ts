import { Injectable } from '@nestjs/common';
import { BlogPostTypes, EntityFactory } from '@project/shared-core';
import { BlogPostEntity } from './blog-post.entity.js';

@Injectable()
export class BlogPostFactory implements EntityFactory<BlogPostEntity> {
  public create(entityPlainData: BlogPostTypes.Post): BlogPostEntity {
    const newEntity = new BlogPostEntity(entityPlainData);
    return newEntity;
  }
}
