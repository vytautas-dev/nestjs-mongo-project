import { IsNotEmpty, Length, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreatePostDto {
  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number.parseInt(value))
  userId: number;

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number.parseInt(value))
  id: number;

  @IsNotEmpty()
  @Length(5, 20)
  title: string;

  @IsNotEmpty()
  @Length(15, 50)
  body: string;
}
