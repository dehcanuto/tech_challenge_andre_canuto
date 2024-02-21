import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarEntity } from '../entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly repo: Repository<CarEntity>,
  ) {}

  create(data: CreateCarDto) {
    this.repo.create(data);
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find({
      skip: 0,
      take: 10,
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, data: UpdateCarDto) {
    this.repo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
