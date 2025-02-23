import { Scooter } from '../../../../domain/scooter';
import { ScooterEntity } from '../entities/scooter.entity';

export class ScooterMapper {
  static toDomain(raw: ScooterEntity): Scooter {
    const domain = new Scooter();
    domain.id = raw.id;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    domain.serialNumber = raw.serialNumber;
    domain.status = raw.status;
    domain.totalMileage = raw.totalMileage;
    domain.totalChargeCycles = raw.totalChargeCycles;
    domain.purchaseDate = raw.purchaseDate;
    domain.warrantyEndDate = raw.warrantyEndDate;
    domain.scooterModelId = raw.scooterModelId;

    return domain;
  }

  static toPersistence(domain: Scooter): ScooterEntity {
    const entity = new ScooterEntity();
    if (domain.id) entity.id = domain.id;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.serialNumber = domain.serialNumber;
    entity.status = domain.status;
    entity.totalMileage = domain.totalMileage;
    entity.totalChargeCycles = domain.totalChargeCycles;
    entity.purchaseDate = domain.purchaseDate;
    entity.warrantyEndDate = domain.warrantyEndDate;
    entity.scooterModelId = domain.scooterModelId;

    return entity;
  }
}
