import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

/**
 * Classe de persistance, mappée à la table "scooter_model_entity".
 * On y ajoute les colonnes correspondant au domain "ScooterModelEntity".
 */
@Entity({ name: 'scooter_model_entity' })
export class ScooterModelEntityEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, nullable: true })
  brand?: string;

  @Column({ type: 'int', nullable: true })
  maintenanceIntervalKm?: number;

  @Column({ type: 'int', nullable: true })
  maintenanceIntervalMonths?: number;

  @Column({ type: 'text', nullable: true })
  description?: string;
}
