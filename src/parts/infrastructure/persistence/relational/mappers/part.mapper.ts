import { Part } from '../../../../domain/part';
import { PartEntity } from '../entities/part.entity';

export class PartMapper {
  static toDomain(raw: PartEntity): Part {
    const domain = new Part();
    domain.id = raw.id;
    domain.name = raw.name;
    domain.description = raw.description;
    domain.stockQuantity = raw.stockQuantity;
    domain.minStockThreshold = raw.minStockThreshold;
    domain.price = Number(raw.price);
    domain.lastEventTimestamp = raw.lastEventTimestamp;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    return domain;
  }

  static toPersistence(domain: Part): PartEntity {
    const entity = new PartEntity();
    if (domain.id) entity.id = domain.id;
    entity.name = domain.name;
    entity.description = domain.description;
    entity.stockQuantity = domain.stockQuantity;
    entity.minStockThreshold = domain.minStockThreshold;
    entity.price = domain.price;
    entity.lastEventTimestamp = domain.lastEventTimestamp;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;

    return entity;
  }
}
