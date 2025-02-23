"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationalPurchaseOrderPersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const purchase_order_repository_1 = require("../purchase-order.repository");
const purchase_order_repository_2 = require("./repositories/purchase-order.repository");
const typeorm_1 = require("@nestjs/typeorm");
const purchase_order_entity_1 = require("./entities/purchase-order.entity");
let RelationalPurchaseOrderPersistenceModule = class RelationalPurchaseOrderPersistenceModule {
};
exports.RelationalPurchaseOrderPersistenceModule = RelationalPurchaseOrderPersistenceModule;
exports.RelationalPurchaseOrderPersistenceModule = RelationalPurchaseOrderPersistenceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([purchase_order_entity_1.PurchaseOrderEntity])],
        providers: [
            {
                provide: purchase_order_repository_1.PurchaseOrderRepository,
                useClass: purchase_order_repository_2.PurchaseOrderRelationalRepository,
            },
        ],
        exports: [purchase_order_repository_1.PurchaseOrderRepository],
    })
], RelationalPurchaseOrderPersistenceModule);
//# sourceMappingURL=relational-persistence.module.js.map