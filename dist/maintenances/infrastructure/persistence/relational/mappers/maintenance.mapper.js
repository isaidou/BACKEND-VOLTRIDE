"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceMapper = void 0;
const maintenance_1 = require("../../../../domain/maintenance");
const maintenance_entity_1 = require("../entities/maintenance.entity");
class MaintenanceMapper {
    static toDomain(raw) {
        const domain = new maintenance_1.Maintenance();
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
    static toPersistence(domain) {
        const entity = new maintenance_entity_1.MaintenanceEntity();
        if (domain.id)
            entity.id = domain.id;
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
exports.MaintenanceMapper = MaintenanceMapper;
//# sourceMappingURL=maintenance.mapper.js.map