import { PurchaseOrder } from '../../../../domain/purchase-order';
import { PurchaseOrderEntity } from '../entities/purchase-order.entity';
export declare class PurchaseOrderMapper {
    static toDomain(raw: PurchaseOrderEntity): PurchaseOrder;
    static toPersistence(domain: PurchaseOrder): PurchaseOrderEntity;
}
