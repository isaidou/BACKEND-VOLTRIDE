import { PurchaseOrderLine } from '../../../../domain/purchase-order-line';
import { PurchaseOrderLineEntity } from '../entities/purchase-order-line.entity';

export class PurchaseOrderLineMapper {
  static toDomain(raw: PurchaseOrderLineEntity): PurchaseOrderLine {
    const domain = new PurchaseOrderLine();
    domain.id = raw.id;
    domain.partId = raw.partId;
    domain.quantity = raw.quantity;
    domain.unitPrice = Number(raw.unitPrice);
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    return domain;
  }

  static toPersistence(domain: PurchaseOrderLine): PurchaseOrderLineEntity {
    const entity = new PurchaseOrderLineEntity();
    if (domain.id) entity.id = domain.id;
    entity.partId = domain.partId;
    entity.quantity = domain.quantity;
    entity.unitPrice = domain.unitPrice;
    return entity;
  }
}
