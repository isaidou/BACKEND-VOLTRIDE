export declare class CreateInventoryTransactionDto {
    partId: string;
    quantityChange: number;
    transactionType: string;
    transactionDate: string;
    sourceType: 'purchase_order' | 'maintenance';
    sourceId: string;
}
