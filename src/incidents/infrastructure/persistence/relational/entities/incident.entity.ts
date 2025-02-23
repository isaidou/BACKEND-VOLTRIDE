import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({ name: 'incident' })
export class IncidentEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid' })
  scooterId: string;

  @Column({ type: 'uuid', nullable: true })
  reportedById?: string;

  @CreateDateColumn()
  dateReported: Date;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 50, default: 'open' })
  status: string;

  @Column({ type: 'boolean', default: true })
  impact_on_operation: boolean;

  @Column({ type: 'text', nullable: true })
  resolutionNotes?: string;
}
