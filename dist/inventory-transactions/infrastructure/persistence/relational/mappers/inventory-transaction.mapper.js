"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryTransactionMapper = void 0;
const inventory_transaction_1 = require("../../../../domain/inventory-transaction");
const inventory_transaction_entity_1 = require("../entities/inventory-transaction.entity");
class InventoryTransactionMapper {
    static toDomain(raw) {
        const domain = new inventory_transaction_1.InventoryTransaction();
        domain.id = raw.id;
        domain.createdAt = raw.createdAt;
        domain.updatedAt = raw.updatedAt;
        domain.partId = raw.partId;
        domain.quantityChange = raw.quantityChange;
        domain.transactionType = raw.transactionType;
        domain.transactionDate = raw.transactionDate;
        domain.sourceType = raw.sourceType;
        domain.sourceId = raw.sourceId;
        return domain;
    }
    static toPersistence(domain) {
        const entity = new inventory_transaction_entity_1.InventoryTransactionEntity();
        if (domain.id)
            entity.id = domain.id;
        entity.partId = domain.partId;
        entity.quantityChange = domain.quantityChange;
        entity.transactionType = domain.transactionType;
        entity.transactionDate = domain.transactionDate;
        entity.sourceType = domain.sourceType;
        entity.sourceId = domain.sourceId;
        return entity;
    }
}
exports.InventoryTransactionMapper = InventoryTransactionMapper;
//# sourceMappingURL=inventory-transaction.mapper.js.map