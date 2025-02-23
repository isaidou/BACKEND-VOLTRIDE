import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { MaintenancePartEntity } from './maintenance-part.entity';

@Entity({ name: 'maintenance' })
export class MaintenanceEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 50 })
  type: string;

  @Column({ type: 'timestamp', nullable: true })
  maintenanceDate?: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  cost: number;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({ type: 'uuid' })
  scooterId: string;

  @Column({ type: 'uuid', nullable: true })
  performedById?: string;

  @Column({ type: 'int', nullable: true })
  currentMileage?: number;

  @Column({ type: 'int', nullable: true })
  currentChargeCycles?: number;

  @OneToMany(() => MaintenancePartEntity, (part) => part.maintenance, {
    cascade: true,
  })
  partsUsed: MaintenancePartEntity[];
}
