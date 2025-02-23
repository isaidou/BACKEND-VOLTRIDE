export declare class InventoryTransaction {
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
