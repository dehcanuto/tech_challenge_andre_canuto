import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'car' })
export class CarEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  model: string;

  @Column()
  thumbnail: string;

  @Column()
  brand: string;

  @Column()
  km_age: string;

  @Column()
  model_year: string;

  @Column('decimal', { precision: 8, scale: 2 })
  price: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
