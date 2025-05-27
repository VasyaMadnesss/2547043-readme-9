import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
      description: 'Unique user id.',
      example: '134ce8babd-cc30-4805-9b12-d9420398e7c5'
    })
  @Expose()
  public id!: string;

  @ApiProperty({
    description: 'Unique user email adress.',
    example: 'example@email.com'
  })
  @Expose()
  public email!: string;

  @ApiProperty({
    description: 'Access token.',
    example: 'example@email.com'
  })
  @Expose()
  public accessToken!: string;
}
