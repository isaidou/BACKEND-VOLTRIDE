import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({ name: 'scooter' })
export class ScooterEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 100 })
  serialNumber: string;

  @Column({ length: 50, default: 'available' })
  status: string;

  @Column({ type: 'int', default: 0 })
  totalMileage: number;

  @Column({ type: 'int', default: 0 })
  totalChargeCycles: number;

  @Column({ type: 'date', nullable: true })
  purchaseDate?: Date;

  @Column({ type: 'date', nullable: true })
  warrantyEndDate?: Date;

  @Column({ type: 'uuid' })
  scooterModelId: string;
}
