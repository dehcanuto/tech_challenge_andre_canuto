import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'credit' })
export class CreditEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column('decimal', { precision: 8, scale: 2 })
  monthly_income: number;

  @Column()
  score: number;

  @Column()
  aproved: boolean;

  @Column()
  car_uuid: string;

  @Column()
  entry_percent: number;

  @Column()
  entry_value: number;

  @Column()
  financing_value: number;

  @Column()
  installments_value: number;

  @Column()
  installments_time: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
