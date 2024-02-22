import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  title: string;

  @IsString()
  model: string;

  @IsString()
  brand: string;

  @IsString()
  thumbnail: string;

  @IsString()
  km_age: string;

  @IsString()
  model_year: string;

  @IsString()
  price: number;

  @IsString()
  uuid: string;
}
