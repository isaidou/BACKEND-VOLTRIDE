"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScooterMapper = void 0;
const scooter_1 = require("../../../../domain/scooter");
const scooter_entity_1 = require("../entities/scooter.entity");
class ScooterMapper {
    static toDomain(raw) {
        const domain = new scooter_1.Scooter();
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
    static toPersistence(domain) {
        const entity = new scooter_entity_1.ScooterEntity();
        if (domain.id)
            entity.id = domain.id;
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
exports.ScooterMapper = ScooterMapper;
//# sourceMappingURL=scooter.mapper.js.map