"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierMapper = void 0;
const supplier_1 = require("../../../../domain/supplier");
const supplier_entity_1 = require("../entities/supplier.entity");
class SupplierMapper {
    static toDomain(raw) {
        const domain = new supplier_1.Supplier();
        domain.id = raw.id;
        domain.createdAt = raw.createdAt;
        domain.updatedAt = raw.updatedAt;
        domain.name = raw.name;
        domain.contactPerson = raw.contactPerson;
        domain.phoneNumber = raw.phoneNumber;
        domain.address = raw.address;
        return domain;
    }
    static toPersistence(domain) {
        const entity = new supplier_entity_1.SupplierEntity();
        if (domain.id)
            entity.id = domain.id;
        entity.createdAt = domain.createdAt;
        entity.updatedAt = domain.updatedAt;
        entity.name = domain.name;
        entity.contactPerson = domain.contactPerson;
        entity.phoneNumber = domain.phoneNumber;
        entity.address = domain.address;
        return entity;
    }
}
exports.SupplierMapper = SupplierMapper;
//# sourceMappingURL=supplier.mapper.js.map