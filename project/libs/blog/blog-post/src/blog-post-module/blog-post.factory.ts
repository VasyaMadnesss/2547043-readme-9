import { Injectable } from '@nestjs/common';
import { EntityFactory, Post } from '@project/shared-core';
import { BlogPostEntity } from './blog-post.entity.js';


@Injectable()
export class BlogPostFactory implements EntityFactory<BlogPostEntity> {
  public create(postDocument: Post): BlogPostEntity {
    const newEntity = new BlogPostEntity(postDocument);
    return newEntity;
  }
}
