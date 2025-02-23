import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { PurchaseOrderLineEntity } from './purchase-order-line.entity';
export declare class PurchaseOrderEntity extends EntityRelationalHelper {
    id: string;
    supplierId: string;
    orderDate: Date;
    expectedDeliveryDate?: Date;
    status: string;
    totalCost: number;
    orderLines: PurchaseOrderLineEntity[];
    createdAt: Date;
    updatedAt: Date;
}
