import { Maintenance } from '../../../../domain/maintenance';
import { MaintenanceEntity } from '../entities/maintenance.entity';

export class MaintenanceMapper {
  static toDomain(raw: MaintenanceEntity): Maintenance {
    const domain = new Maintenance();
    domain.id = raw.id;
    domain.createdAt = raw.createdAt;
    domain.updatedAt = raw.updatedAt;
    domain.type = raw.type;
    domain.maintenanceDate = raw.maintenanceDate;
    domain.cost = Number(raw.cost);
    domain.notes = raw.notes;
    domain.scooterId = raw.scooterId;
    domain.performedById = raw.performedById;
    domain.currentMileage = raw.currentMileage;
    domain.currentChargeCycles = raw.currentChargeCycles;
    return domain;
  }

  static toPersistence(domain: Maintenance): MaintenanceEntity {
    const entity = new MaintenanceEntity();
    if (domain.id) entity.id = domain.id;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.type = domain.type;
    entity.maintenanceDate = domain.maintenanceDate;
    entity.cost = domain.cost;
    entity.notes = domain.notes;
    entity.scooterId = domain.scooterId;
    entity.performedById = domain.performedById;
    entity.currentMileage = domain.currentMileage;
    entity.currentChargeCycles = domain.currentChargeCycles;
    return entity;
  }
}
