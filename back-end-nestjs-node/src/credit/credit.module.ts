import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreditEntity } from '../entities/credit.entity';
import { CarEntity } from '../entities/car.entity';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CreditEntity]),
    TypeOrmModule.forFeature([CarEntity]),
  ],
  controllers: [CreditController],
  providers: [CreditService],
  exports: [CreditService],
})
export class CreditModule {}
