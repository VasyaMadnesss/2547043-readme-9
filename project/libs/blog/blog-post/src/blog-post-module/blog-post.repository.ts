import { Injectable } from '@nestjs/common';
import { BasePostgresRepository } from '@project/data-access';
import { BlogPostEntity } from './blog-post.entity.js';
import { BlogPostFactory } from './blog-post.factory.js';
import { PrismaClientService } from '../../../models/src/prisma-client-module/prisma-client.service.js';


@Injectable()
export class BlogPostRepository implements BasePostgresRepository<BlogPostEntity> {
  constructor(
    entityFactory: BlogPostFactory,
    readonly client: PrismaClientService
  ) {}

  }
  public findById(id: BlogPostEntity['id']): Promise<BlogPostEntity | null> {
  }
  public save(entity: BlogPostEntity): Promise<void> {
  }
  public update(entity: BlogPostEntity): Promise<void> {
  }
  public deleteById(id: BlogPostEntity['id']): Promise<void> {
  }
}
