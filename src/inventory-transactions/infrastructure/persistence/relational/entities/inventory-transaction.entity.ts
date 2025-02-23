import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({ name: 'inventory_transaction' })
export class InventoryTransactionEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'uuid' })
  partId: string;

  @Column({ type: 'int' })
  quantityChange: number;

  @Column({ type: 'varchar', length: 10 })
  transactionType: string;

  @Column({ type: 'timestamp' })
  transactionDate: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  sourceType: 'purchase_order' | 'maintenance';

  @Column({ type: 'uuid', nullable: true })
  sourceId: string;
}
