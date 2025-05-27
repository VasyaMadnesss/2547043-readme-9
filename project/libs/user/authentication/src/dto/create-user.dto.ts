import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'Unique user email adress.',
    example: 'example@email.com'
  })
  public email!: string;

  @ApiProperty({
    description: `User's name.`,
    example: 'John Doe'
  })
  public name!: string;

  @ApiProperty({
    description: `User's password.`,
    example: '123abc'
  })
  public password!: string;
}
