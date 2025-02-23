import { PurchaseOrder } from '../../../../domain/purchase-order';
import { PurchaseOrderEntity } from '../entities/purchase-order.entity';
import { PurchaseOrderLineMapper } from './purchase-order-line.mapper';

export class PurchaseOrderMapper {
  static toDomain(raw: PurchaseOrderEntity): PurchaseOrder {
    const domain = new PurchaseOrder();
    domain.id = raw.id;
    domain.supplierId = raw.supplierId;
    domain.orderDate = raw.orderDate;
    domain.expectedDeliveryDate = raw.expectedDeliveryDate;
    domain.status = raw.status;
    domain.totalCost = Number(raw.totalCost);
    domain.orderLines = raw.orderLines
      ? raw.orderLines.map(PurchaseOrderLineMapper.toDomain)
      : [];
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    return domain;
  }

  static toPersistence(domain: PurchaseOrder): PurchaseOrderEntity {
    const entity = new PurchaseOrderEntity();
    if (domain.id) entity.id = domain.id;
    entity.supplierId = domain.supplierId;
    entity.orderDate = domain.orderDate;
    entity.expectedDeliveryDate = domain.expectedDeliveryDate;
    entity.status = domain.status;
    entity.totalCost = domain.totalCost;
    entity.orderLines = domain.orderLines.map(
      PurchaseOrderLineMapper.toPersistence,
    );
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    // La relation orderLines sera gérée par cascade
    return entity;
  }
}
