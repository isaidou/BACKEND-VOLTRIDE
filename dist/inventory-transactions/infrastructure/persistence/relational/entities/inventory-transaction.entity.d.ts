import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
export declare class InventoryTransactionEntity extends EntityRelationalHelper {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    partId: string;
    quantityChange: number;
    transactionType: string;
    transactionDate: Date;
    sourceType: 'purchase_order' | 'maintenance';
    sourceId: string;
}
