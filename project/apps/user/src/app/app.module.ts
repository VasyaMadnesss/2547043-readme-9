import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@project/authentication';
import { UserConfigModule } from '@project/account-config';

@Module({
  imports: [AuthenticationModule, UserConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
