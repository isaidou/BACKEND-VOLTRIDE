"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderMapper = void 0;
const purchase_order_1 = require("../../../../domain/purchase-order");
const purchase_order_entity_1 = require("../entities/purchase-order.entity");
const purchase_order_line_mapper_1 = require("./purchase-order-line.mapper");
class PurchaseOrderMapper {
    static toDomain(raw) {
        const domain = new purchase_order_1.PurchaseOrder();
        domain.id = raw.id;
        domain.supplierId = raw.supplierId;
        domain.orderDate = raw.orderDate;
        domain.expectedDeliveryDate = raw.expectedDeliveryDate;
        domain.status = raw.status;
        domain.totalCost = Number(raw.totalCost);
        domain.orderLines = raw.orderLines
            ? raw.orderLines.map(purchase_order_line_mapper_1.PurchaseOrderLineMapper.toDomain)
            : [];
        domain.createdAt = raw.createdAt;
        domain.updatedAt = raw.updatedAt;
        return domain;
    }
    static toPersistence(domain) {
        const entity = new purchase_order_entity_1.PurchaseOrderEntity();
        if (domain.id)
            entity.id = domain.id;
        entity.supplierId = domain.supplierId;
        entity.orderDate = domain.orderDate;
        entity.expectedDeliveryDate = domain.expectedDeliveryDate;
        entity.status = domain.status;
        entity.totalCost = domain.totalCost;
        entity.orderLines = domain.orderLines.map(purchase_order_line_mapper_1.PurchaseOrderLineMapper.toPersistence);
        entity.createdAt = domain.createdAt;
        entity.updatedAt = domain.updatedAt;
        return entity;
    }
}
exports.PurchaseOrderMapper = PurchaseOrderMapper;
//# sourceMappingURL=purchase-order.mapper.js.map