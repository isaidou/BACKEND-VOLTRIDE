import { PurchaseOrderLine } from '../../../../domain/purchase-order-line';
import { PurchaseOrderLineEntity } from '../entities/purchase-order-line.entity';
export declare class PurchaseOrderLineMapper {
    static toDomain(raw: PurchaseOrderLineEntity): PurchaseOrderLine;
    static toPersistence(domain: PurchaseOrderLine): PurchaseOrderLineEntity;
}
