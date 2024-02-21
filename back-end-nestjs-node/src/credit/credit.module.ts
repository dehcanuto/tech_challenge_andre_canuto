import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreditEntity } from '../entities/credit.entity';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CreditEntity])],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
