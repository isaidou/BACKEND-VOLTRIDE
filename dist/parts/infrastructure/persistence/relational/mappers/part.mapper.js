"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartMapper = void 0;
const part_1 = require("../../../../domain/part");
const part_entity_1 = require("../entities/part.entity");
class PartMapper {
    static toDomain(raw) {
        const domain = new part_1.Part();
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
    static toPersistence(domain) {
        const entity = new part_entity_1.PartEntity();
        if (domain.id)
            entity.id = domain.id;
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
exports.PartMapper = PartMapper;
//# sourceMappingURL=part.mapper.js.map