"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderLineMapper = void 0;
const purchase_order_line_1 = require("../../../../domain/purchase-order-line");
const purchase_order_line_entity_1 = require("../entities/purchase-order-line.entity");
class PurchaseOrderLineMapper {
    static toDomain(raw) {
        const domain = new purchase_order_line_1.PurchaseOrderLine();
        domain.id = raw.id;
        domain.partId = raw.partId;
        domain.quantity = raw.quantity;
        domain.unitPrice = Number(raw.unitPrice);
        domain.createdAt = raw.createdAt;
        domain.updatedAt = raw.updatedAt;
        return domain;
    }
    static toPersistence(domain) {
        const entity = new purchase_order_line_entity_1.PurchaseOrderLineEntity();
        if (domain.id)
            entity.id = domain.id;
        entity.partId = domain.partId;
        entity.quantity = domain.quantity;
        entity.unitPrice = domain.unitPrice;
        return entity;
    }
}
exports.PurchaseOrderLineMapper = PurchaseOrderLineMapper;
//# sourceMappingURL=purchase-order-line.mapper.js.map