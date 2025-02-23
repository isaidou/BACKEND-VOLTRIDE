import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { PurchaseOrderLineEntity } from './purchase-order-line.entity';

@Entity({ name: 'purchase_order' })
export class PurchaseOrderEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  supplierId: string;

  @CreateDateColumn()
  orderDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  expectedDeliveryDate?: Date;

  @Column({ length: 50, default: 'open' })
  status: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalCost: number;

  @OneToMany(() => PurchaseOrderLineEntity, (line) => line.purchaseOrder, {
    cascade: true,
  })
  orderLines: PurchaseOrderLineEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
