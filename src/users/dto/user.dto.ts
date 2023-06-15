import { IsNotEmpty, Length, IsInt, IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(5, 20)
  username: string;

  @IsNotEmpty()
  @Length(10, 30)
  password: string;
}
