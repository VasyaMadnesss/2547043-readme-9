import { Injectable, NotFoundException } from '@nestjs/common';
import { BasePostgresRepository } from '@project/data-access';
import { BlogPostEntity } from './blog-post.entity.js';
import { BlogPostFactory } from './blog-post.factory.js';
import { PrismaClientService } from '@project/blog-models';

@Injectable()
export class BlogPostRepository
  extends BasePostgresRepository<BlogPostEntity>
{
  constructor(
    entityFactory: BlogPostFactory,
    client: PrismaClientService
  ) {
    super(entityFactory, client);
  }

  public override async findById(id: string): Promise<BlogPostEntity> {
    const document = await this.client.post.findFirst({
      where: {
        id,
      },
      include: {
        comments: true,
        tags: true,
        likes: true,
        textPost: true,
        linkPost: true,
        quotePost: true,
        videoPost: true,
        photoPost: true,
        reposts: true,
      },
    });

    if (!document) {
      throw new NotFoundException(`Post with id ${id} not found.`);
    }
    return this.entityFactory.create(document);
  }

  // public override save(entity: BlogPostEntity): Promise<void> {}

  // public override update(entity: BlogPostEntity): Promise<void> {}

  // public override deleteById(id: BlogPostEntity['id']): Promise<void> {}
}
