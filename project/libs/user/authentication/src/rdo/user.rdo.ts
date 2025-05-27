import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @ApiProperty({
    description: 'Unique user id.',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5'
  })
  @Expose()
  public id!: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  public avatar!: string;

  @ApiProperty({
    description: 'Unique user email adress.',
    example: 'example@email.com'
  })
  @Expose()
  public email!: string;

  @ApiProperty({
    description: `User's name.`,
    example: 'John Doe'
  })
  @Expose()
  public name!: string;
}
