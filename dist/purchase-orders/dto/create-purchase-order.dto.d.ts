import { CreatePurchaseOrderLineDto } from './create-purchase-order-line.dto';
export declare class CreatePurchaseOrderDto {
    supplierId: string;
    expectedDeliveryDate?: string;
    status?: string;
    totalCost?: number;
    orderLines: CreatePurchaseOrderLineDto[];
}
