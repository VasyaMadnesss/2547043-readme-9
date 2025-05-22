import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {
  @ApiProperty({
    description: 'Unique user email adress.',
    example: 'example@email.com'
  })
  public email!: string;

  @ApiProperty({
    description: `User's password.`,
    example: '123abc'
  })
  public password!: string;
}
