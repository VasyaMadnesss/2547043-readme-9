import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';
import { BlogUserRepository } from './blog-user.repository.js';
import { BlogUserFactory } from './blog-user.factory.js';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';

@Module({
  imports:[MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  controllers: [BlogUserController],
  providers: [
    BlogUserRepository,
     BlogUserService,
    BlogUserFactory,
  ],
  exports: [BlogUserRepository]
})
export class BlogUserModule {}
