"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScooterModelEntityMapper = void 0;
const scooter_model_entity_1 = require("../../../../domain/scooter-model-entity");
const scooter_model_entity_entity_1 = require("../entities/scooter-model-entity.entity");
class ScooterModelEntityMapper {
    static toDomain(raw) {
        const domainEntity = new scooter_model_entity_1.ScooterModelEntity();
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
    static toPersistence(domainEntity) {
        const persistenceEntity = new scooter_model_entity_entity_1.ScooterModelEntityEntity();
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
exports.ScooterModelEntityMapper = ScooterModelEntityMapper;
//# sourceMappingURL=scooter-model-entity.mapper.js.map