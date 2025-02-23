import { InventoryTransaction } from '../../../../domain/inventory-transaction';
import { InventoryTransactionEntity } from '../entities/inventory-transaction.entity';

export class InventoryTransactionMapper {
  static toDomain(raw: InventoryTransactionEntity): InventoryTransaction {
    const domain = new InventoryTransaction();
    domain.id = raw.id;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    domain.partId = raw.partId;
    domain.quantityChange = raw.quantityChange;
    domain.transactionType = raw.transactionType;
    domain.transactionDate = raw.transactionDate;
    domain.sourceType = raw.sourceType as 'purchase_order' | 'maintenance';
    domain.sourceId = raw.sourceId;
    return domain;
  }

  static toPersistence(
    domain: InventoryTransaction,
  ): InventoryTransactionEntity {
    const entity = new InventoryTransactionEntity();
    if (domain.id) entity.id = domain.id;
    entity.partId = domain.partId;
    entity.quantityChange = domain.quantityChange;
    entity.transactionType = domain.transactionType;
    entity.transactionDate = domain.transactionDate;
    entity.sourceType = domain.sourceType;
    entity.sourceId = domain.sourceId;
    return entity;
  }
}
