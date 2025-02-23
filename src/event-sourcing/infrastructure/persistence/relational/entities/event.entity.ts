import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'event_store' })
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  aggregateId: string; // Identifiant d'un agrégat (ex: id d'un scooter)

  @Column({ length: 50 })
  aggregateType: string; // Type d'agrégat (Scooter, Maintenance, etc.)

  @Column({ length: 50 })
  eventType: string; // Type d'événement (ex.: 'MaintenancePlanned')

  @Column({ type: 'jsonb' })
  eventPayload: any; // Les données de l'événement (détails)

  @Column({ type: 'timestamp' })
  eventTimestamp: Date; // Date/heure de l'enregistrement de l'événement

  @Column()
  version: number; // Numéro de version pour gérer l'ordre

  @Column({ type: 'boolean', default: false })
  processed: boolean; // Indique si cet événement a déjà été appliqué à la projection
}
