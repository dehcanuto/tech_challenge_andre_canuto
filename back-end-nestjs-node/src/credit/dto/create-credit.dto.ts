import { IsBoolean, IsNumber, IsString } from 'class-validator';

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
  car_uuid: string;

  @IsNumber()
  monthly_income: number;

  @IsNumber()
  score: number;

  @IsBoolean()
  aproved: boolean;

  @IsNumber()
  entry_percent: number;

  @IsNumber()
  entry_value: number;

  @IsNumber()
  financing_value: number;

  @IsNumber()
  installments_value: number;

  @IsNumber()
  installments_time: number;
}
