"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentMapper = void 0;
const incident_1 = require("../../../../domain/incident");
const incident_entity_1 = require("../entities/incident.entity");
class IncidentMapper {
    static toDomain(raw) {
        const domain = new incident_1.Incident();
        domain.id = raw.id;
        domain.createdAt = raw.createdAt;
        domain.updatedAt = raw.updatedAt;
        domain.scooterId = raw.scooterId;
        domain.reportedById = raw.reportedById;
        domain.dateReported = raw.dateReported;
        domain.description = raw.description;
        domain.status = raw.status;
        domain.impact_on_operation = raw.impact_on_operation;
        domain.resolutionNotes = raw.resolutionNotes;
        return domain;
    }
    static toPersistence(domain) {
        const entity = new incident_entity_1.IncidentEntity();
        if (domain.id)
            entity.id = domain.id;
        entity.createdAt = domain.createdAt;
        entity.updatedAt = domain.updatedAt;
        entity.scooterId = domain.scooterId;
        entity.reportedById = domain.reportedById;
        entity.dateReported = domain.dateReported;
        entity.description = domain.description;
        entity.status = domain.status;
        entity.impact_on_operation = domain.impact_on_operation;
        entity.resolutionNotes = domain.resolutionNotes;
        return entity;
    }
}
exports.IncidentMapper = IncidentMapper;
//# sourceMappingURL=incident.mapper.js.map