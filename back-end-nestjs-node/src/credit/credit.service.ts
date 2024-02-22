import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { CreateCreditDto } from './dto/create-credit.dto';
import { CreditEntity } from '../entities/credit.entity';
import { CarEntity } from '../entities/car.entity';

// | Score     | Crédito                                        |
// | --------- | ---------------------------------------------- |
// | 1 a 299   | Reprovado                                      |
// | 300 a 599 | 70% de entrada, 30% do comprometimento da renda|
// | 600 a 799 | 50% de entrada, 25% do comprometimento da renda|
// | 800 a 950 | 30% de entrada, 20% do comprometimento da renda|
// | 951 a 999 | 100% de financiamento, taxa zero.              |

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(CreditEntity)
    private readonly repo: Repository<CreditEntity>,
    @InjectRepository(CarEntity)
    private readonly repoCar: Repository<CarEntity>,
  ) {}

  getScore(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  async getCreditOptions({ score, car_uuid, monthly_income }: CreateCreditDto) {
    const percentValue = (num: number, amount: number) => (num * amount) / 100;
    const installmentsCalculate = (time: number) => {
      result.installments_time = time;
      result.installments_value = result.financing_value / time;
      // Adiciona o juros nas parcelas.
      result.installments_value =
        result.installments_value +
        percentValue(result.installments_value, result.financing_interest);
      // Verifica se o valor ultrapassa o comprometimento da renda, caso tenha passado, retorna `false`.
      return result.income_installments_limit > result.installments_value;
    };

    const { price } = await this.repoCar.findOneBy({ uuid: car_uuid });
    const result = {
      score: score,
      entry_percent: 0,
      entry_value: 0,
      financing_value: 0,
      financing_interest: 1.5, // Taxa de juros de 1.5% ao mes.
      income_installments_limit: 0,
      installments_limit: 0, // define a porcentagem do valor q as parcelas nao podem passar.
      installments_value: 0, // valor das parcelas.
      installments_time: 0, // quantas vezes o valor pode ser parcelado.
      car_value: +price,
    };

    // 70% de entrada, 30% do comprometimento da renda
    if (score > 300 && score < 599) {
      result.entry_percent = 70;
      result.installments_limit = 30;
    }

    // 50% de entrada, 25% do comprometimento da renda
    if (score > 600 && score < 799) {
      result.entry_percent = 50;
      result.installments_limit = 25;
    }

    // 30% de entrada, 20% do comprometimento da renda
    if (score > 800 && score < 950) {
      result.entry_percent = 30;
      result.installments_limit = 20;
    }

    // 100% de financiamento, taxa zero.
    if (score > 951 && score < 999) result.financing_interest = 0;

    // Verifica o valor de entrada de acordo com o score.
    result.entry_value = percentValue(result.car_value, result.entry_percent);
    // Faz a conta para o valor restante a ser financiado.
    result.financing_value = result.car_value - result.entry_value;
    // Verifica o limite que as parcelas nao possam passar para nao comprometer a renda.
    result.income_installments_limit = percentValue(
      monthly_income,
      result.installments_limit,
    );

    // Aqui finalizamos a rotina, verificando a menor quantidade de parcelas possíveis
    // sem comprometer a renda do usuário.

    // Verifica as parcelas em 12x.
    if (installmentsCalculate(12)) return result;
    // Verifica as parcelas em 24x.
    if (installmentsCalculate(24)) return result;
    // Verifica as parcelas em 48x.
    if (installmentsCalculate(48)) return result;
    // Verifica as parcelas em 60x.
    if (installmentsCalculate(60)) return result;
  }

  async create(data: CreateCreditDto) {
    // Verifica score e aprovação.
    const score = this.getScore(1, 999);
    data.aproved = score > 300 && score < 999;
    data.score = score;

    if (data.aproved) {
      const result = await this.getCreditOptions(data);

      // Adiciona os valores do financiamento.
      data.entry_percent = result.entry_percent;
      data.entry_value = result.entry_value;
      data.financing_value = result.financing_value;
      data.installments_value = Number(result.installments_value.toFixed(2));
      data.installments_time = result.installments_time;
    }

    this.repo.create(data);
    return this.repo.save(data);
  }

  findAll(limit: number = 16) {
    return this.repo.find({
      skip: 0,
      take: limit,
    });
  }
}
