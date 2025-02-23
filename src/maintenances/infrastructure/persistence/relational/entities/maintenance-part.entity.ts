import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MaintenanceEntity } from './maintenance.entity';
import { PartEntity } from '../../../../../parts/infrastructure/persistence/relational/entities/part.entity';

@Entity({ name: 'maintenance_parts' })
export class MaintenancePartEntity {
  @PrimaryColumn('uuid', { name: 'maintenance_id' })
  maintenanceId: string;

  @PrimaryColumn('uuid', { name: 'part_id' })
  partId: string;

  @ManyToOne(() => MaintenanceEntity, (maintenance) => maintenance.partsUsed, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'maintenance_id' })
  maintenance: MaintenanceEntity;

  @ManyToOne(() => PartEntity, { eager: true })
  @JoinColumn({ name: 'part_id' })
  part: PartEntity;

  @Column({ type: 'int', default: 1 })
  quantityUsed: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost: number;
}
