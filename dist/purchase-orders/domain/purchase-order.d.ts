import { PurchaseOrderLine } from './purchase-order-line';
export declare class PurchaseOrder {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    supplierId: string;
    orderDate: Date;
    expectedDeliveryDate?: Date;
    status: string;
    totalCost: number;
    orderLines: PurchaseOrderLine[];
}
