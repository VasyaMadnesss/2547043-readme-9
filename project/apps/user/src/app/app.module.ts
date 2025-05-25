import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@project/authentication';
import { MongooseModule } from '@nestjs/mongoose';
import { UserConfigModule, getMongooseOptions } from '@project/account-config';

@Module({
  imports: [AuthenticationModule, UserConfigModule, MongooseModule.forRootAsync(getMongooseOptions())],
  controllers: [],
  providers: [],
})
export class AppModule {}
