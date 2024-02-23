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

  generateUUID() {
    return 'xxxxxxxxxx-4xxyxxxxxxx'.replace(/[xy]/g, (c) => {
      const r =
        (Math.floor(new Date().getTime() / 16) + Math.random() * 16) % 16 | 0;
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  create(data: CreateCarDto) {
    data.uuid = this.generateUUID();
    this.repo.create(data);
    return this.repo.save(data);
  }

  findAll(limit: number = 16) {
    return this.repo.find({
      skip: 0,
      take: limit,
    });
  }

  findOne(uuid: string) {
    return this.repo.findOneBy({ uuid });
  }

  update(id: number, data: UpdateCarDto) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
