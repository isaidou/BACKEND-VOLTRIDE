import { ScooterModelEntity } from '../../../../domain/scooter-model-entity';
import { ScooterModelEntityEntity } from '../entities/scooter-model-entity.entity';

export class ScooterModelEntityMapper {
  static toDomain(raw: ScooterModelEntityEntity): ScooterModelEntity {
    const domainEntity = new ScooterModelEntity();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    domainEntity.name = raw.name;
    domainEntity.brand = raw.brand;
    domainEntity.maintenanceIntervalKm = raw.maintenanceIntervalKm;
    domainEntity.maintenanceIntervalMonths = raw.maintenanceIntervalMonths;
    domainEntity.description = raw.description;

    return domainEntity;
  }

  static toPersistence(
    domainEntity: ScooterModelEntity,
  ): ScooterModelEntityEntity {
    const persistenceEntity = new ScooterModelEntityEntity();

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    persistenceEntity.name = domainEntity.name;
    persistenceEntity.brand = domainEntity.brand;
    persistenceEntity.maintenanceIntervalKm =
      domainEntity.maintenanceIntervalKm;
    persistenceEntity.maintenanceIntervalMonths =
      domainEntity.maintenanceIntervalMonths;
    persistenceEntity.description = domainEntity.description;

    return persistenceEntity;
  }
}
