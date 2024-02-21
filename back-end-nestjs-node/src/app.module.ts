import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { CreditModule } from './credit/credit.module';

@Module({
  imports: [CarsModule, CreditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
