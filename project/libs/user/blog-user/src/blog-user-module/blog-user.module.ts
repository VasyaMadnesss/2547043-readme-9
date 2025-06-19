import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserRepository } from './blog-user.repository.js';
import { BlogUserFactory } from './blog-user.factory.js';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';

@Module({
  imports:[MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [
    BlogUserRepository,
    BlogUserFactory,
  ],
  exports: [BlogUserRepository]
})
export class BlogUserModule {}
