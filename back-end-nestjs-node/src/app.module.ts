import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { CreditModule } from './credit/credit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      database: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_ROOT_PASSWORD,
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CarsModule,
    CreditModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
