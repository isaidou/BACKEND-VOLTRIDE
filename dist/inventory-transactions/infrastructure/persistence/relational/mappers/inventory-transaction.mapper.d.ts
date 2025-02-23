import { InventoryTransaction } from '../../../../domain/inventory-transaction';
import { InventoryTransactionEntity } from '../entities/inventory-transaction.entity';
export declare class InventoryTransactionMapper {
    static toDomain(raw: InventoryTransactionEntity): InventoryTransaction;
    static toPersistence(domain: InventoryTransaction): InventoryTransactionEntity;
}
