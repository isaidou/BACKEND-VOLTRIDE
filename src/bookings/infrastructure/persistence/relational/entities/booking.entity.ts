import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({ name: 'booking' })
export class BookingEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'uuid' })
  scooterId: string;

  @Column({ type: 'timestamp' })
  startDatetime: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDatetime?: Date;

  @Column({ length: 100, nullable: true })
  location?: string;

  @Column({ length: 50, default: 'reserved' })
  status: string;

  @Column({ type: 'text', nullable: true })
  notes?: string;
}
