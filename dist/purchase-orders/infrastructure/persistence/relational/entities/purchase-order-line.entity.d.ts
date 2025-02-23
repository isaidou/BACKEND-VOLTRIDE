import { PurchaseOrderEntity } from './purchase-order.entity';
export declare class PurchaseOrderLineEntity {
    id: string;
    purchaseOrder: PurchaseOrderEntity;
    partId: string;
    quantity: number;
    unitPrice: number;
    createdAt: Date;
    updatedAt: Date;
}
