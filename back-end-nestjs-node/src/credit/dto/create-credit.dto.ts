import { IsString } from 'class-validator';

export class CreateCreditDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  score: string;

  @IsString()
  aproved: boolean;
}
